import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LowerbodyListPageRoutingModule } from './lowerbody-list-routing.module';

import { LowerbodyListPage } from './lowerbody-list.page';
import { ExerciseComponent } from "../../components/exercise/exercise.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LowerbodyListPageRoutingModule,
    ExerciseComponent
  ],
  declarations: [LowerbodyListPage]
})
export class LowerbodyListPageModule {}
