import { Injectable } from "@angular/core";
import { SessionModel } from "../entities/session.model";
import { BehaviorSubject } from "rxjs";


@Injectable({
  providedIn: "root",
})
export class SessionManagerService {

  public isAuthCall = new BehaviorSubject<boolean>(false);
  constructor() {}

  getSessionInfo(): SessionModel {
    return JSON.parse(localStorage.getItem("session")!);
  }

  setSessionInfo(sessionData: SessionModel): void {
    return localStorage.setItem("session", JSON.stringify(sessionData));
  }

  clearSessionInfo(): void {
    return localStorage.removeItem("session");
  }
}
