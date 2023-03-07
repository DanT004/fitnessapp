import { CommonModule, NgFor } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IonicModule, ModalController, NavParams } from '@ionic/angular';
import { Ilist } from 'src/app/interfaces/ilist';
import { Users } from 'src/app/interfaces/users';
import { CurrentUserService } from 'src/app/services/current-user.service';
import { ExerciseListService } from 'src/app/services/exercise-list.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  standalone: true,
  imports: [IonicModule, NgFor, CommonModule],
  selector: 'app-modal-list',
  templateUrl: './modal-list.component.html',
  styleUrls: ['./modal-list.component.scss'],
})
export class ModalListComponent implements OnInit {
  name!: string;
 lists!: Ilist[] |any;
 user!: Users[] | any;

  constructor(private modalCtrl: ModalController,
    private listService: ExerciseListService,
    private userService: UsersService,
    private currentUser: CurrentUserService,
    private params: NavParams,
  ) {

    // let userData = this.userService.get_current_user();
    // this.currentUser.getUserInfo(userData.user_id).subscribe((result: any) => {
    //   this.user = result;
    // });

    // this.listService.getList(userData.user_id).subscribe((results) => {
    //   this.lists = results;
    // })
    let id = params.get('id');
    console.log(id);
    this.listService.getInfo(id).subscribe((results) => {
        this.lists = results;
        console.log(results)
      })

  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    return this.modalCtrl.dismiss(this.name, 'confirm');
  }

  ngOnInit() { }

}
