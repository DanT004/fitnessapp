import { Component, Input, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { InfiniteScrollCustomEvent, OverlayEventDetail } from '@ionic/core';
import { Users } from '../interfaces/users';
import { CurrentUserService } from '../services/current-user.service';
import { ExercisesService } from '../services/exercises.service';
import { UsersService } from '../services/users.service';
import { Iexercise } from 'src/app/interfaces/iexercise';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  @ViewChild(IonModal) modal!: IonModal;

  user!: Users[] | any;
  name: any;
  message: any;
  items:any = [];
  exercises1!: Iexercise[];
  exercises2!: Iexercise[];
  exercises3!: Iexercise[];
  exercises!: Iexercise[];


  constructor(private userService: UsersService,
    private currentUser: CurrentUserService,
    private service: ExercisesService,

  ) {
    let userData = this.userService.get_current_user();
    this.currentUser.getUserInfo(userData.user_id).subscribe((result: any) => {
      this.user = result;
    });

    this.service.getExercise(1).subscribe((results) => {
      this.exercises1 = results;
    });

    this.service.getExercise(2).subscribe((results) => {
      this.exercises2 = results;
    });

    this.service.getExercise(3).subscribe((results) => {
      this.exercises3 = results;
    });

    this.service.getAllExercises().subscribe((results) => {
      this.exercises = results;
    });
  }

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.name, 'confirm');
  }
  
  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Hello, ${ev.detail.data}!`;
    }
  }

  addToList(item:any){
    JSON.stringify(item);
    console.log(item)
  }

}
