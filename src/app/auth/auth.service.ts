import { Injectable } from "@angular/core";
import { AuthResponse } from "./model/response.model";
import { User } from "./model/user.model";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, tap } from "rxjs";
import { Router } from "@angular/router";
import { environment } from 'src/environments/environment';

@Injectable({
providedIn: 'root'
})
export class AuthService {
    user = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')!));

    constructor(private http: HttpClient, private router: Router) { }

    signUp(email: string, password: string) {
        return this.http.post<AuthResponse>("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + environment.api_key, {
            email: email,
            password: password,
            returnSecureToken: true
        }).pipe(
            tap(response => {
            this.handleAuthentication(response.email, response.localId, response.idToken, +response.expiresIn)   
            })
        )
    }


    login(email: string, password: string) {
        return this.http.post<AuthResponse>("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key="+ environment.api_key, {
            email: email,
            password: password,
            returnSecureToken: true
        }).pipe(
            tap(response => {
            this.handleAuthentication(response.email, response.localId, response.idToken, +response.expiresIn)
            })
        )
    }

    logout() {
     //    this.user.next("null");
        localStorage.removeItem("user");
        this.router.navigate(['/auth']);
    }

    autoLogin() {
        const user = JSON.parse(localStorage.getItem("user") as string);
        console.log("user : " + user);
        if(user) {
            this.router.navigate(['/auth']);
            return;
        }

        const loadedUser = new User(
            user.email,
            user.id,
            user._token,
            new Date(user._tokenExpirationDate)
        );

        if(loadedUser.token) {
            this.user.next(loadedUser);
        }
    }

    handleAuthentication(email: string, userId: string, token: string, expiresIn: number) {
        const expirationDate = new Date(new Date().getTime() + (expiresIn * 1000))

        const user = new User(
            email,
            userId,
            token,
            expirationDate
        );

        this.user.next(user);   
        localStorage.setItem("user", JSON.stringify(user));
    }
}