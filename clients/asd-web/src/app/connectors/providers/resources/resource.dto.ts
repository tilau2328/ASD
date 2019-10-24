export interface ResourceDto {
  readonly id: string;
  readonly name: string;
  readonly method: string;
  readonly endpoint: string;
  readonly provider: string;
  readonly params?: string;
  readonly headers?: string;
  readonly queryParams?: string;
}

export interface CreateResourceDto {
  readonly name: string;
  readonly method: string;
  readonly endpoint: string;
  readonly provider: string;
  readonly params?: string;
  readonly headers?: string;
  readonly queryParams?: string;
}

export interface UpdateResourceDto {
  readonly name?: string;
  readonly method?: string;
  readonly endpoint?: string;
  readonly provider?: string;
  readonly params?: string;
  readonly headers?: string;
  readonly queryParams?: string;
}
