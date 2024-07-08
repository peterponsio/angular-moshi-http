import { HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { RequestModel } from "./entities/Request";
import { AuthenticatorImpl } from "./authenticator/AuthenticatorImpl";
import { Injector } from "@angular/core";

export abstract class MoshiMoshiAbstract {
    abstract initializeMoshi(auth: AuthenticatorImpl, injector: Injector): void
    abstract load(httpRequest: RequestModel): Observable<unknown>
    abstract loadAuthCall(httpRequest: RequestModel): Observable<unknown>
}