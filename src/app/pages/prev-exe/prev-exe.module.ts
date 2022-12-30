import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrevExePageRoutingModule } from './prev-exe-routing.module';

import { PrevExePage } from './prev-exe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrevExePageRoutingModule
  ],
  declarations: [PrevExePage]
})
export class PrevExePageModule {}
