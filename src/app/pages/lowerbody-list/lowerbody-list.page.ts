import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Iexercise } from 'src/app/interfaces/iexercise';
import { ExercisesService } from 'src/app/services/exercises.service';

@Component({
  selector: 'app-lowerbody-list',
  templateUrl: './lowerbody-list.page.html',
  styleUrls: ['./lowerbody-list.page.scss'],
})
export class LowerbodyListPage implements OnInit {

  exercises!: Iexercise[];

  constructor(private location:Location, private service:ExercisesService) {
    this.service.getLower(2).subscribe((results) => {
      this.exercises = results;
    })
  }

  back(){
    this.location.back();
  }

  ngOnInit() {
  }

}
