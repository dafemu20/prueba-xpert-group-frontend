import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private readonly router: Router) {}

  canActivate(): boolean {
    const isLoginValid = localStorage.getItem('isLoginValid');
    if(isLoginValid){
      return true;
    }else{
      this.router.navigate(['/login']);
      return false;
    }
  }

}
