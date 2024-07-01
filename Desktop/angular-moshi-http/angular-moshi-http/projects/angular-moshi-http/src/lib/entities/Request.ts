import { HttpClient, HttpParams } from "@angular/common/http";

export interface Request{
    method: keyof HttpClient,
    url: string,
    body: unknown,
    params?: keyof HttpParams
}