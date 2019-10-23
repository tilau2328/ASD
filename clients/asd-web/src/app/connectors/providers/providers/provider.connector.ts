import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {CreateProviderDto, ProviderDto, UpdateProviderDto} from "./dto/provider.dto";

@Injectable()
export class ProviderConnector {
  private url: string = 'http://localhost:3000/providers';

  constructor(private readonly http: HttpClient) {}

  list(): Observable<ProviderDto[]> {
    return this.http.get<ProviderDto[]>(this.getUrl());
  }

  getProviders(): Observable<string[]> {
    return this.http.get<string[]>(`${this.getUrl()}/enum`);
  }

  async get(id: string): Promise<ProviderDto> {
    return this.http.get<ProviderDto>(this.getUrl(id)).toPromise();
  }

  create(createProviderDto: CreateProviderDto): Observable<ProviderDto> {
    return this.http.post<ProviderDto>(this.getUrl(), createProviderDto);
  }

  async update(id: string, updateProviderDto: UpdateProviderDto): Promise<ProviderDto> {
    return this.http.patch<ProviderDto>(this.getUrl(id), updateProviderDto).toPromise();
  }

  delete(id: string): Observable<string> {
    return this.http.delete<string>(this.getUrl(id));
  }

  private getUrl(id?: string): string {
    if (id) { return `${this.url}/${id}`; }
    return this.url;
  }
}
