import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AppService} from '../service/app.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private router: Router, private appService: AppService) {
  }

  canActivate(): boolean {
    if (this.appService.isLoggedIn()) {
      if (this.appService.getRole() === 'ADMIN') {
        return true;
      } else {
        this.router.navigate(['/home']);
        return false;
      }
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
