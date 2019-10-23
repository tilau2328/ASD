export interface ConnectionDto {
  id?: string;
  user: string;
  scope?: string;
  token: string;
  remoteId: string;
  provider: string;
}

export interface CreateConnectionDto {
  provider: string;
  state: string;
  code: string;
}
