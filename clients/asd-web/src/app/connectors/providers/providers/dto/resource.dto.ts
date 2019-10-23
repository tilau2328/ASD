export interface ResourceDto {
  readonly id: string;
  readonly method: string;
  readonly endpoint: string;
  readonly provider: string;
  readonly params?: string;
  readonly headers?: string;
  readonly queryParams?: string;
}

export interface CreateResourceDto {
  readonly method: string;
  readonly endpoint: string;
  readonly provider: string;
  readonly params?: string;
  readonly headers?: string;
  readonly queryParams?: string;
}

export interface UpdateResourceDto {
  readonly method?: string;
  readonly endpoint?: string;
  readonly provider?: string;
  readonly params?: string;
  readonly headers?: string;
  readonly queryParams?: string;
}
