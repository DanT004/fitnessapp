import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Iexercise } from 'src/app/interfaces/iexercise';
import { ExercisesService } from 'src/app/services/exercises.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lowerbody-list',
  templateUrl: './lowerbody-list.page.html',
  styleUrls: ['./lowerbody-list.page.scss'],
})
export class LowerbodyListPage implements OnInit {

  exercises!: Iexercise[];

  constructor(private location:Location, 
    private service:ExercisesService,
    private router:Router
    ) {
    this.service.getExercise(2).subscribe((results) => {
      this.exercises = results;
    })
  }

  back(){
    this.router.navigate(['/tabs/tab2'])
  }

  exercisePage(item: any){
    this.router.navigate(['/exercise-page', {data: JSON.stringify(item)}]);
}

  ngOnInit() {
  }

}
