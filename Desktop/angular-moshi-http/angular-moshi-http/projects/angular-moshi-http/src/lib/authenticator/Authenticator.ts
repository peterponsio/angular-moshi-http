export interface Authenticator {
    getNewToken(parameters: unknown): void
    getCurrentToken(): String
    isLogged(): Boolean
    logout(): void
} 