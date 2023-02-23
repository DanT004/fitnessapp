import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ExercisesService } from 'src/app/services/exercises.service';
import { Iexercise } from 'src/app/interfaces/iexercise';

@Component({
  selector: 'app-warmup-list',
  templateUrl: './warmup-list.page.html',
  styleUrls: ['./warmup-list.page.scss'],
})
export class WarmupListPage implements OnInit {
  
  exercises!: Iexercise[];

  constructor(private location:Location, private service:ExercisesService) {
    this.service.getWarmup(1).subscribe((results) => {
      this.exercises = results;
    })

  }
  

  back(){
    this.location.back();
  }

  ngOnInit(){
  }

}
