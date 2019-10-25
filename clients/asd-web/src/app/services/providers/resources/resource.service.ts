import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {
  CreateResourceDto,
  ResourceDto,
  UpdateResourceDto
} from "../../../connectors/providers/resources/resource.dto";
import {ResourcesConnector} from "../../../connectors/providers/resources/resources.connector";

@Injectable()
export class ResourceService {
  resources$: Observable<ResourceDto[]>;
  currentResource$: Observable<ResourceDto>;

  constructor(private readonly resourceConnector: ResourcesConnector) {}

  listResources(): Observable<ResourceDto[]> {
    if (!this.resources$) {
      this.resources$ = this.resourceConnector.listResources();
    }
    return this.resources$;
  }

  getResource(id: string): Observable<ResourceDto> {
    if (!this.resources$) {
      this.currentResource$ = this.resourceConnector.getResource(id);
    }
    return this.currentResource$;
  }

  createResource(input: CreateResourceDto): Observable<ResourceDto> {
    return this.resourceConnector.create(input);
  }

  updateResource(id: string, input: UpdateResourceDto): Observable<ResourceDto> {
    return this.resourceConnector.update(id, input);
  }

  deleteResource(id: string): Observable<string> {
    return this.resourceConnector.delete(id);
  }
}
