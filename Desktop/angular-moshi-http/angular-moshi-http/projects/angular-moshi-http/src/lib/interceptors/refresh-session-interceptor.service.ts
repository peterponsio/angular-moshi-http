import { HttpClient, HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BehaviorSubject, from, Observable, throwError } from 'rxjs';
import { catchError, switchMap, tap } from 'rxjs/operators';
import { SessionManagerService } from '../storage/session-manager.service';
import { SessionModel } from '../entities/session.model';
import { MoshiMoshi } from '../MoshiMoshi';

@Injectable({
  providedIn: 'root'
})
export class RefreshSessionInterceptorService implements HttpInterceptor {

  private publicEndpoints = []

  constructor(
    private storageManager: SessionManagerService,
    private http:HttpClient,
    private moshiMoshi: MoshiMoshi
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // si es una llamada de assets se hace un handle y se omite 
    if (this.isPublicEndPoint()) {
      return next.handle(req)
    }

    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          return from(this.refreshCall())
          .pipe(
            switchMap((newToken) => {
              return next.handle(req.clone({
                headers: req.headers.set("Authorization", `Bearer ${newToken.accessToken}`)
              }))
            }),
          )
        }
        return throwError(error);
      })
      )
      
  }
  
  async refreshCall(): Promise<any>{

    const authInfo: SessionModel  = this.storageManager.getSessionInfo()
    const endpoint = `/auth/log-in`
    
    
    const body = {
      email: '',
      password: ''
    }
    return new Promise((resolve, reject) => {
      this.http.post<any>(endpoint,body)
      .pipe(
        tap(res=> console.log("res",res)
        )
      )
      .subscribe(response => {
        this.storageManager.setSessionInfo(response) 
        resolve(response)
      }, err => {
        reject(err)
      })
    });
  }

  private isPublicEndPoint(): boolean {
    return this.moshiMoshi.isAuthCall.value
  }

}
