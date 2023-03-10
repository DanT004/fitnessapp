import { Component, Input, ViewChild } from '@angular/core';
import { AlertController, IonModal, ModalController } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core';
import { Users } from '../interfaces/users';
import { CurrentUserService } from '../services/current-user.service';
import { ExercisesService } from '../services/exercises.service';
import { UsersService } from '../services/users.service';
import { Iexercise } from 'src/app/interfaces/iexercise';
import { Ilist } from '../interfaces/ilist';
import { ExerciseListService } from '../services/exercise-list.service';
import { FormArray, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { ModalListComponent } from '../components/modal-list/modal-list.component';
import { Router } from '@angular/router';
import { profile } from 'console';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  listForm;

  @ViewChild(IonModal) modal!: IonModal;

  user!: Users[] | any;
  name: any;
  message: any;
  items: any[] = [];
  exercises1!: Iexercise[];
  exercises2!: Iexercise[];
  exercises3!: Iexercise[];
  exercises!: Iexercise[];
  lists!: Ilist[] | any;
  


  constructor(private userService: UsersService,
    private currentUser: CurrentUserService,
    private exerciseService: ExercisesService,
    private listService: ExerciseListService,
    private formBuilder: FormBuilder,
    private alertControl: AlertController,
    private modalCtrl: ModalController,
    private router: Router,
  ) {

    let userData = this.userService.get_current_user();
    this.currentUser.getUserInfo(userData.user_id).subscribe((result: any) => {
      this.user = result;
    });

    this.listForm = formBuilder.group({
      title: ['', [Validators.required]],
      t1: [this.items[1]],
      t2: [this.items[2]],
      t3: [this.items[3]],
      t4: [this.items[4]],
      t5: [this.items[5]],
      t6: [this.items[6]],
      t7: [this.items[7]],
      t8: [this.items[8]],
      t9: [this.items[9]],
      t10: [this.items[10]],
      t11: [this.items[11]],
      user_id: [userData.user_id]
    });

    this.listService.getList(userData.user_id).subscribe((results) => {
      this.lists = results;
    })

    this.exerciseService.getExercise(1).subscribe((results) => {
      this.exercises1 = results;
    });

    this.exerciseService.getExercise(2).subscribe((results) => {
      this.exercises2 = results;
    });

    this.exerciseService.getExercise(3).subscribe((results) => {
      this.exercises3 = results;
    });

    this.exerciseService.getAllExercises().subscribe((results) => {
      this.exercises = results;
    });


  }

  cancel(): void {
    this.modal.dismiss(null, 'cancel');
    this.items = [];
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


  addToList(item: any) {
    this.items.push(item.title);
    console.log(this.items)
  }

  save() {
    this.listService.createList(this.listForm.value).subscribe((result) => {
      console.log(result);
    })
    console.log(this.listForm.value);
  }

  clear(): void {
    this.items = [];
  }

  logForm() {
    console.log()
  }

  get titleFormControl() {
    return this.listForm.get('title')!;
  }

  async openModal(item:any) {
    console.log(item)
    let modal = await this.modalCtrl.create({
      component: ModalListComponent,
      componentProps: {
        id: item.id
      }
    });
    return await modal.present();
  }
  

  close(): void {
    this.modal.dismiss(null, 'cancel');
  }

  deleteEntry(item: any) {
    this.listService.deleteList(item.id).subscribe((result) => {
      console.log(result);
    })

    let index = this.lists.findIndex((item: { id: any; }) => item.id === this.lists.id);
    this.lists.splice(index, 1);
  }

  handleRefresh(event: any) {
    setTimeout(() => {
      let userData = this.userService.get_current_user();
      this.listService.getList(userData.user_id).subscribe((results) => {
        this.lists = results;
      })
      event.target.complete();
    }, 2000);
  };

}
