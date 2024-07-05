export abstract class Authenticator {
    abstract getNewToken(parameters: unknown): void
    abstract getCurrentToken(): String
    abstract isLogged(): Boolean
    abstract logout(): void
} 