import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Iexercise } from 'src/app/interfaces/iexercise';
import { ExercisesService } from 'src/app/services/exercises.service';

@Component({
  selector: 'app-upperbody-list',
  templateUrl: './upperbody-list.page.html',
  styleUrls: ['./upperbody-list.page.scss'],
})
export class UpperbodyListPage implements OnInit {

  exercises!: Iexercise[];

  constructor(private location:Location, private service:ExercisesService) {
    this.service.getExercise(3).subscribe((results) => {
      this.exercises = results;
    })
  }
  back(){
    this.location.back();
  }

  ngOnInit() {
  }

}
