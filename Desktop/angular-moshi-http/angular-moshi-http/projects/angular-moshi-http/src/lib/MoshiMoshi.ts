import { BehaviorSubject, Observable, map, of, tap, throwError } from 'rxjs';
import { Inject, Injectable, Injector } from '@angular/core';
import { MoshiMoshiAbstract } from './MoshiMoshiAbstract';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Request } from './entities/Request';
import { SessionManagerService } from './storage/session-manager.service';

export class MoshiMoshi extends MoshiMoshiAbstract {

    protected sessionManager = this.injector.get(SessionManagerService);

    constructor(private baseUrl: string,protected injector: Injector) {
        super();
    }

    override load(httpRequest: Request): Observable<unknown> {
        try {
            this.sessionManager.isAuthCall.next(false)
            return of("")
        } catch (error) {
           return throwError((err: unknown) => this.handler(err)) 
        }
    }

    override loadAuthCall(httpRequest: Request): Observable<unknown> {
        try {
            this.sessionManager.isAuthCall.next(true)
            return of("")
        } catch (error) {
           return throwError((err: unknown) => this.handler(err)) 
        }
    }

    private handler(error: unknown): unknown {
        let errorCodeType = error
        return errorCodeType
    }

    
}