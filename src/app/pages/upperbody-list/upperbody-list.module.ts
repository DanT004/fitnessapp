import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpperbodyListPageRoutingModule } from './upperbody-list-routing.module';

import { UpperbodyListPage } from './upperbody-list.page';
import { ExerciseComponent } from "../../components/exercise/exercise.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpperbodyListPageRoutingModule,
    ExerciseComponent
  ],
  declarations: [UpperbodyListPage]
})
export class UpperbodyListPageModule {}
