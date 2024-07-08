import { Observable, throwError } from 'rxjs';
import { Injectable, Injector } from '@angular/core';
import { MoshiMoshiAbstract } from './MoshiMoshiAbstract';
import { RequestModel } from './entities/Request';
import { SessionManagerService } from './storage/session-manager.service';
import { Request } from './http/request';
import { AuthenticatorImpl } from './authenticator/AuthenticatorImpl';

@Injectable()
export class MoshiMoshi extends MoshiMoshiAbstract {

    protected sessionManager!: SessionManagerService; 
    protected db!: Request 

    constructor() {
        super();
    }

    override initializeMoshi(auth: AuthenticatorImpl, injector: Injector){
        try {
            this.sessionManager = injector.get(SessionManagerService)
            this.db = injector.get(Request)
        } catch (error) {
            throwError((err: unknown) => this.handler(err)) 
        }
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

