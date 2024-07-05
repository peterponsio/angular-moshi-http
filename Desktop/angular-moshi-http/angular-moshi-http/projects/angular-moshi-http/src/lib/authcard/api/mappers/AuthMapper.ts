import { Token } from "@angular/compiler";
import { Mapper } from "../../../base/mapper";
import { TokensDTO } from "../dto/TokensDTO";
import { Tokens } from "../../../entities/Tokens";

export class AuthMapperImpl extends Mapper<TokensDTO, Tokens> {

    override mapFrom(param: TokensDTO): Tokens {
        return {
            accessToken: param.access_token,
            refreshToken: param.refresh_token
        }
    }
    override mapTo(param: Tokens): TokensDTO {
        throw new Error("Method not implemented.");
    }
    
}