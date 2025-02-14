import { Router } from "@angular/router";
import { SessionManagerService } from "../storage/session-manager.service";
import { Authenticator } from "./Authenticator";
import { Injector, Optional } from "@angular/core";
import { EndPoints } from "../entities/Endpoints";

export class AuthenticatorImpl implements Authenticator {

    protected session = this.injector.get(SessionManagerService);
    protected router = this.injector.get(Router)

    baseUrl: string = ""
    loginPath: string = "" 
    refreshPath: string = ""
    constructor(endPoints: EndPoints, @Optional() protected  injector: Injector){
        this.baseUrl = endPoints.baseUrl
        this.loginPath = endPoints.loginPath
        this.refreshPath = endPoints.refreshPath
    }
    
    addHeaders(request: unknown): unknown {
        throw new Error("Method not implemented.");
    }
    authorize(request: unknown): unknown {  
        throw new Error("Method not implemented.");
    }
    getNewToken(parameters: unknown): void {
        throw new Error("Method not implemented.");
    }
    getCurrentToken(): String {
        return this.session.getSessionInfo().access_token
    }
    isLogged(): boolean {
        const hasUserInfo = this.session.getSessionInfo()
        const isLogged = hasUserInfo ?  true : false
        return isLogged
    }
    logout(): void {
        this.session.clearSessionInfo()
        this.router.navigate([''])
    }
    
}