import { Router } from "@angular/router";
import { SessionManagerService } from "../storage/session-manager.service";

class AuthenticatorImpl extends Authenticator {
    
    constructor(private session: SessionManagerService,private router: Router){}

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