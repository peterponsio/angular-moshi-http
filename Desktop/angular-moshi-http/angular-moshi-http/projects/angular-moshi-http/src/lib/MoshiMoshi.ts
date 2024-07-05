import { Observable, map, of, tap, throwError } from 'rxjs';
import { Injector, Optional } from '@angular/core';
import { MoshiMoshiAbstract } from './MoshiMoshiAbstract';
import { RequestModel } from './entities/Request';
import { SessionManagerService } from './storage/session-manager.service';
import { Request } from './http/request';

export class MoshiMoshi extends MoshiMoshiAbstract {

    protected sessionManager = this.injector.get(SessionManagerService);
    protected db = this.injector.get(Request)

    constructor(private baseUrl: string, @Optional() protected  injector: Injector) {
        super();
    }

    override load(httpRequest: RequestModel): Observable<unknown> {
        try {
            this.sessionManager.isAuthCall.next(false)
            return this.db.doRequest(httpRequest)
        } catch (error) {
           return throwError((err: unknown) => this.handler(err)) 
        }
    }

    override loadAuthCall(httpRequest: RequestModel): Observable<unknown> {
        try {
            this.sessionManager.isAuthCall.next(true)
            return this.db.doRequest(httpRequest)
        } catch (error) {
           return throwError((err: unknown) => this.handler(err)) 
        }
    }

    private handler(error: unknown): unknown {
        let errorCodeType = error
        return errorCodeType
    }

    
}