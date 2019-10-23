import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {CreateResourceDto} from "./dto/create-resource.dto";
import {UpdateResourceDto} from "./dto/update-resource.dto";
import {ResourceDto} from "./dto/resource.dto";

@Injectable()
export class ResourceConnector {
  url = 'http://localhost:3000/auth/providers';

  constructor(private readonly http: HttpClient) {}

  async listResources(provider: string): Promise<ResourceDto[]> {
    return this.http.get<ResourceDto[]>(this.getUrl(provider)).toPromise();
  }

  async getResource(provider: string, id: string): Promise<ResourceDto> {
    return this.http.get<ResourceDto>(this.getUrl(provider, id)).toPromise();
  }

  async createResource(provider: string, createResourceDto: CreateResourceDto): Promise<ResourceDto> {
    return this.http.post(this.getUrl(provider), createResourceDto).toPromise();
  }

  async updateResource(provider: string, id: string, updateResourceDto: UpdateResourceDto): Promise<ResourceDto> {
    return this.http.patch<ResourceDto>(this.getUrl(provider, id), updateResourceDto).toPromise();
  }

  async deleteResource(provider: string, id: string): Promise<string> {
    return this.http.delete<string>(this.getUrl(provider, id)).toPromise();
  }

  private getUrl(provider: string, resource?: string) {
    return `${this.url}/${provider}/resources` + resource ? `/${resource}` : '';
  }
}
