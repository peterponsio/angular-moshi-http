import { HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { RequestModel } from "./entities/Request";

export abstract class MoshiMoshiAbstract {
    abstract load(httpRequest: RequestModel): Observable<unknown>
    abstract loadAuthCall(httpRequest: RequestModel): Observable<unknown>
}