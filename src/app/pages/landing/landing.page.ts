import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Preferences } from '@capacitor/preferences';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {
	

  constructor(private router: Router) { }

//  login() {
//     this.route.navigate(['/login']);
//   }

  ngOnInit() {
  }

  async login() {
    await Preferences.set({ key: 'LANDING_KEY', value: 'true' });
    this.router.navigateByUrl('/login', { replaceUrl: true});
  }

  async signup() {
    await Preferences.set({ key: 'LANDING_KEY', value: 'true' });
    this.router.navigateByUrl('/signup', { replaceUrl: true});
  }

 
}
