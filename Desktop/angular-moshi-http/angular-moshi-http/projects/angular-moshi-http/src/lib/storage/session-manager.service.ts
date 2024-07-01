import { Injectable } from "@angular/core";
import { SessionModel } from "../entities/session.model";


@Injectable({
  providedIn: "root",
})
export class SessionManagerService {
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
