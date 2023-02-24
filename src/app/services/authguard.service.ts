import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService {

  constructor(private userService:UsersService, private router:Router) { }

  canActivate(): boolean {
    if (!this.userService.isAuthenticated()) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
