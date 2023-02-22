import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-upperbody-list',
  templateUrl: './upperbody-list.page.html',
  styleUrls: ['./upperbody-list.page.scss'],
})
export class UpperbodyListPage implements OnInit {

  constructor(private location:Location) { }

  back(){
    this.location.back();
  }

  ngOnInit() {
  }

}
