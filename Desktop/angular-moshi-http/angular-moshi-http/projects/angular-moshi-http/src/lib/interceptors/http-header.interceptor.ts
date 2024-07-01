import type {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { from, switchMap } from "rxjs";
import { Observable } from "rxjs/internal/Observable";
import { SessionManagerService } from "../storage/session-manager.service";

@Injectable({
  providedIn: "root",
})
export class HeadersInterceptor implements HttpInterceptor {
  private publicEndpoints = [];

  constructor(private sessionManagerService: SessionManagerService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (req.url.includes("assets")) {
      return next.handle(req);
    }

    return from(this.setHeaders(req)).pipe(
      switchMap((headers) => next.handle(req.clone({ headers })))
    );
  }

  private async setHeaders(request: HttpRequest<any>): Promise<HttpHeaders> {
    let { headers } = request;

    if (!this.isPublicEndPoint(request)) {
      const authInfo = this.sessionManagerService.getSessionInfo();

      if (authInfo) {
        headers = headers.set(
          "Authorization",
          `${authInfo.token_type} ${authInfo.access_token} `
        );
      }
    }

    return Promise.resolve(headers);
  }

  private isPublicEndPoint(request: HttpRequest<any>) {
    return this.publicEndpoints.find((ep) => {
      return request.url.includes(ep);
    });
  }
}
