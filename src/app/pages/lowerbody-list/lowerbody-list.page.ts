import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-lowerbody-list',
  templateUrl: './lowerbody-list.page.html',
  styleUrls: ['./lowerbody-list.page.scss'],
})
export class LowerbodyListPage implements OnInit {

  constructor(private location:Location) { }

  back(){
    this.location.back();
  }

  ngOnInit() {
  }

}
