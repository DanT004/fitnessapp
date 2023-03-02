import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iexercise } from 'src/app/interfaces/iexercise';
import { ExercisesService } from 'src/app/services/exercises.service';
import { resourceLimits } from 'worker_threads';
import { Location } from '@angular/common';
import { title } from 'process';
import { NavParams } from '@ionic/angular';
import { __param } from 'tslib';


@Component({
  selector: 'app-exercise-page',
  templateUrl: './exercise-page.page.html',
  styleUrls: ['./exercise-page.page.scss'],
})
export class ExercisePagePage implements OnInit {

  exercise!: Iexercise[] | any;
  item: any;

  constructor(
    private router: Router,
    private service: ExercisesService,
    private location: Location,
    private activatedRoute: ActivatedRoute
  ) {

    let data: any = this.activatedRoute.snapshot.paramMap.get('data');
    this.item = JSON.parse(data);
    console.log(this.item)

    this.service.getExeInfo(this.item.id).subscribe((result) => {
      this.exercise = result;
      console.log(result)
    });
  }


  ngOnInit(): void {

  }

  back() {
    this.location.back();

  }

}
