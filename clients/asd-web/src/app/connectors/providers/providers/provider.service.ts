import {Injectable, OnInit} from "@angular/core";
import {ProviderConnector} from "./provider.connector";
import {BehaviorSubject, Observable} from "rxjs";
import {CreateProviderDto, ProviderDto} from "./dto/provider.dto";
import {map} from "rxjs/operators";

@Injectable()
export class ProviderService {
  public providers$: BehaviorSubject<ProviderDto[]>;
  public providerEnum$: Observable<string[]>;

  constructor(private readonly providerConnector: ProviderConnector) {
    this.providers$ = new BehaviorSubject([]);
    this.providerEnum$ = providerConnector.getProviders();
  }

  list(): Observable<ProviderDto[]> {
    if (!this.providers$) {
      this.providerConnector.list().subscribe((providers: ProviderDto[]) => this.providers$.next(providers));
    }
    return this.providers$.asObservable();
  }

  create(createProviderDto: CreateProviderDto): Promise<void> {
    return this.providerConnector.create(createProviderDto).pipe(
      map((provider: ProviderDto) => this.addProvider(provider))
    ).toPromise();
  }

  async delete(id: string): Promise<void> {
    return this.providerConnector.delete(id).pipe(
      map((provider: string) => this.removeProvider(provider))
    ).toPromise();
  }

  private addProvider(provider: ProviderDto): void {
    const providers: ProviderDto[] = this.providers$.getValue();
    const index: number = providers.findIndex((p) => p.id === provider.id);
    if (index > -1) {
      providers.splice(index, 1, provider);
    } else {
      providers.push(provider);
    }
    this.providers$.next(providers);
  }

  private removeProvider(provider: string): void {
    const providers: ProviderDto[] = this.providers$.getValue();
    const index: number = providers.findIndex((p) => p.id === provider);
    if (index > -1) {
      providers.splice(index, 1);
    }
    this.providers$.next(providers);
  }
}
