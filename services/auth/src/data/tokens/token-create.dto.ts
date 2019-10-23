export interface TokenCreate {
    user: string;
    accessToken: string;
    refreshToken: string;
    tokenValidity: Date;
    refreshValidity: Date;
}
