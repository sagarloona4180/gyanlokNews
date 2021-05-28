import {  Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { password } from '../common/constant/constant';


@Injectable({
    providedIn: 'root'
})
export class AdminGuard implements CanActivate {

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


      
     
        if (password.value) {
            return true;
        } else {
            return false;
        }

        return true;
    }

}
