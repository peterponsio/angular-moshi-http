import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable, Injector } from "@angular/core";
import { Observable } from "rxjs";
import { RequestModel } from "../entities/Request";

@Injectable()
export class Request {
  protected basePath = ``;
  protected http: HttpClient = this.injector.get(HttpClient);

  constructor(protected injector: Injector) {}

  doRequest<T>(
    req: RequestModel
  ): Observable<T> {
    const body = req.body
    return this.http.request<T>(req.method, req.url, { body });
  }
}
