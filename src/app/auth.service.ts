import { reject, resolve } from "q";
import { promise } from "protractor";

export class AuthService {
    
    loggedIn = false;

    login() {
        this.loggedIn = true;
    }

    logOut() {
        this.loggedIn = false;
    }

    isAuthenticated() {
        const promise =  new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.loggedIn);
            }, 800);
        })

        return promise;
    }

}

