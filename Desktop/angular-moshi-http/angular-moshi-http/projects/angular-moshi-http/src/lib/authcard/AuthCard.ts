import { Tokens } from "../entities/Tokens"

interface AuthenticationCard {
    getCurrentToken(parameters: unknown): Tokens
    refreshAccessToken(refreshToken: String): Tokens
    logout(): void
}