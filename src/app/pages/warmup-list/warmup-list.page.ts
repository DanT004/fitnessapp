import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ExercisesService } from 'src/app/services/exercises.service';
import { Iexercise } from 'src/app/interfaces/iexercise';
import { Router } from '@angular/router';

@Component({
  selector: 'app-warmup-list',
  templateUrl: './warmup-list.page.html',
  styleUrls: ['./warmup-list.page.scss'],
})
export class WarmupListPage implements OnInit {
  
  exercises!: Iexercise[];

  constructor(private location:Location, 
    private service:ExercisesService,
    private router:Router,
    ) {
    this.service.getExercise(1).subscribe((results) => {
      this.exercises = results;
    })

  }
  

  back(){
    this.location.back();
  }

  exercisePage(){
      this.router.navigateByUrl('/exercise-page', {replaceUrl: true});
  }

  ngOnInit(){
  }

}
