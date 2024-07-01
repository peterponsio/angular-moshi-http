import { HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { Request } from "./entities/Request";

export abstract class MoshiMoshiAbstract {
    abstract load(httpRequest: Request): Observable<unknown>
    abstract loadAuthCall(httpRequest: Request): Observable<unknown>
}