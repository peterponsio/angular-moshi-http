import { HttpClient, HttpParams } from "@angular/common/http";

export interface RequestModel {
    method: keyof HttpClient,
    url: string,
    body: unknown,
    params?: keyof HttpParams
}