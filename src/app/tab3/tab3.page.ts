import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from '../interfaces/users';
import { CurrentUserService } from '../services/current-user.service';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  user!: Users[] |any;

  constructor(private router:Router,
    private userService:UsersService, 
    private currentUser: CurrentUserService
    ) {
      let userData = this.userService.get_current_user();
      this.currentUser.getUserInfo(userData.user_id).subscribe((result: any) => {
        this.user = result;
      });
    }

  logout(){
    localStorage.removeItem("currentUser");
    this.router.navigate(['login']);
  }

}
