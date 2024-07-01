import { HttpClient, HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BehaviorSubject, from, Observable, of } from 'rxjs';
import { catchError, switchMap, tap } from 'rxjs/operators';

import { LocalStorageService } from '../utils/localStorage.service';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RefreshSessionInterceptorService implements HttpInterceptor {

  private refreshTokenSubject = new BehaviorSubject<string | null>(null)
  private publicEndpoints = []

  constructor(
    private localStorage: LocalStorageService,
    private http:HttpClient
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // si es una llamada de assets se hace un handle y se omite 
    if (req.url.includes('assets') || this.isPublicEndPoint(req)) {
      return next.handle(req)
    }

    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          return from(this.refreshCall())
          .pipe(
            switchMap((newToken) => {
              return next.handle(req.clone({
                headers: req.headers.set("Authorization", `Bearer ${newToken.access_token}`)
              }))
            }),
          )
        }
      })
      )
  }
  
  async refreshCall(): Promise<any>{

    const authInfo = await this.localStorage.getAuthInfo()
    const endpoint = `${environment.baseUrl.PROD}/auth/token`

    const body = {
      refresh_token: authInfo.refresh_token,
      grant_type: 'refresh_token',
      client_id: environment.appData.client_id,
      client_secret:  environment.appData.client_secret
    }
    return new Promise((resolve, reject) => {
      this.http.post<any>(endpoint,body)
      .pipe(
        tap(res=> console.log("res",res)
        )
      )
      .subscribe(response => {
        this.localStorage.setAuthInfo(response) 
        this.refreshTokenSubject.next(response.access_token)
        resolve(response)
      }, err => {
        reject(err)
      })
    });
  }

  private isPublicEndPoint(request: HttpRequest<any>) {
    return this.publicEndpoints.find((ep) => {
        return request.method === ep.method && request.url.includes(ep.endpoint);
    });
  }

}
