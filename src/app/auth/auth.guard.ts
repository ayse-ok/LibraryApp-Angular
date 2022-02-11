import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { AuthService } from './auth.service';
import { map, tap } from "rxjs/operators";
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

  constructor( public router: Router,private authService: AuthService) { }

  canActivate(): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.authService.user.pipe(
        map(user => {
            return !!user;
        }),
        tap(isAuth => {
            if(!isAuth) {
                this.router.navigate(['/auth']);
            }
        })
    );
  }
}