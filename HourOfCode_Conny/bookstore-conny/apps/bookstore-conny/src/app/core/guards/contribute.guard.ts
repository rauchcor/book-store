import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from "@angular/router";
import { Observable } from "rxjs";
import { LoginService } from "../services/login.service";
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class ContributeGuard implements CanActivate {
  constructor(private loginService: LoginService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.loginService.isAdmin().pipe(
      tap(value => {
        if (!value) {
          this.router.navigate(["/shallnotpass"]);
        }
      })
    );
  }
}
