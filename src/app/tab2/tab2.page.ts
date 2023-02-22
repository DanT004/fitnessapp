import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private route:Router) {}


  warmup_list(){
    this.route.navigate(['/warmup-list']);
  }

  lowerbody_list(){
    this.route.navigate(['/lowerbody-list']);
  }

  upperbody_list(){
    this.route.navigate(['/upperbody-list']);
  }

}
