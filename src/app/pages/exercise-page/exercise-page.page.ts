import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iexercise } from 'src/app/interfaces/iexercise';
import { ExercisesService } from 'src/app/services/exercises.service';
import { resourceLimits } from 'worker_threads';
import { Location } from '@angular/common';
import { title } from 'process';


@Component({
  selector: 'app-exercise-page',
  templateUrl: './exercise-page.page.html',
  styleUrls: ['./exercise-page.page.scss'],
})
export class ExercisePagePage implements OnInit {

  exercise!: Iexercise[];

  constructor(
    private router:Router,
    private service:ExercisesService,
    private location:Location,
    
    ) {
     
     }

  ngOnInit(): void {
    // let exeData = this.service.getCurrentExe();
    // this.service.getExeInfo(exeData.id).subscribe((result) =>{
    //   this.exercise = result;
    // })
  }

  back(){
    this.location.back();
    // this.router.navigateByUrl('/warmup-list', {replaceUrl: true});
  }

}
