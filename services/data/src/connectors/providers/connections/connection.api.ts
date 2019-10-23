export interface ConnectionDto {
    readonly provider: string;
    readonly remoteId: string;
    readonly token: string;
    readonly user: string;
    readonly id: string;
}

export interface CreateConnectionDto {
    readonly provider: string;
    readonly state: string;
    readonly code: string;
}
