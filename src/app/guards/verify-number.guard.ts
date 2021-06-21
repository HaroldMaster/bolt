import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { CountryCodeService } from '../services/country-code.service';

@Injectable({
  providedIn: 'root',
})
export class VerifyNumberGuard implements CanActivate {
  constructor(private countryCode: CountryCodeService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
      if(this.countryCode.getIsAuth()){
        return true;
      }
      return false;
    }
}
