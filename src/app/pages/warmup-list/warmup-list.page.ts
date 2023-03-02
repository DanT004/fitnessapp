import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ExercisesService } from 'src/app/services/exercises.service';
import { Iexercise } from 'src/app/interfaces/iexercise';
import { NavigationExtras, Router, RouterLink } from '@angular/router';
import { ExercisePagePage } from '../exercise-page/exercise-page.page';
import { IonItem, NavController } from '@ionic/angular';

@Component({
  selector: 'app-warmup-list',
  templateUrl: './warmup-list.page.html',
  styleUrls: ['./warmup-list.page.scss'],
})
export class WarmupListPage implements OnInit {

  exercises!: Iexercise[] | any;
  id: number|null|undefined;

  constructor(private location: Location,
    private service: ExercisesService,
    private router: Router,
  ) {
    this.service.getExercise(1).subscribe((results) => {
      this.exercises = results;
      console.log(results)
    });

  }

  exercisePage(item: any) {
    this.router.navigate(['/exercise-page', {data: JSON.stringify(item)}]);
  }


  back() {
    this.router.navigate(['/tabs/tab2'])
  }



  ngOnInit(): void {
  }

}
