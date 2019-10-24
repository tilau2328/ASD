export interface ProviderDto {
  readonly id: string;
  readonly name: string;
  readonly scope: string;
  readonly userUrl: string;
  readonly authUrl: string;
  readonly tokenUrl: string;
  readonly clientId: string;
  readonly clientSecret: string;
}

export interface CreateProviderDto {
  readonly name: string;
  readonly scope: string;
  readonly userUrl: string;
  readonly authUrl: string;
  readonly tokenUrl: string;
  readonly clientId: string;
  readonly clientSecret: string;
}

export interface UpdateProviderDto {
  readonly name?: string;
  readonly scope?: string;
  readonly userUrl?: string;
  readonly authUrl?: string;
  readonly tokenUrl?: string;
  readonly clientId?: string;
  readonly clientSecret?: string;
}
