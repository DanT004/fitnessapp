import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-warmup-list',
  templateUrl: './warmup-list.page.html',
  styleUrls: ['./warmup-list.page.scss'],
})
export class WarmupListPage implements OnInit {

  constructor(private location:Location) { }

  back(){
    this.location.back();
  }

  ngOnInit() {
  }

}
