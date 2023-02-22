import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Preferences } from '@capacitor/preferences';
import { Observable } from 'rxjs';

export const LANDING_KEY = 'landing-seen';

@Injectable({
  providedIn: 'root'
})
export class LandingGuard implements CanLoad {

  constructor(private router: Router) {}

  async canLoad(): Promise<boolean> {
      const hasSeenLanding = await Preferences.get({key: 'LANDING_KEY'});
      if (hasSeenLanding && (hasSeenLanding.value === 'true')) {
        return true;
      } else {
        this.router.navigateByUrl('/landing', { replaceUrl:true });
        return false;
      }
  }
}


