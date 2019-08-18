import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable()
export class AuthGuardService implements CanActivate {
  public currentUser: any;
  constructor(private _router: Router, public afAuth: AngularFireAuth) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const token = localStorage.getItem('token');
    if (token) {
      return true;
    } else {
      this._router.navigate(['/login']);
      return false;
    }
  }
}
