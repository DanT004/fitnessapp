import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrevListPageRoutingModule } from './prev-list-routing.module';

import { PrevListPage } from './prev-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrevListPageRoutingModule
  ],
  declarations: [PrevListPage]
})
export class PrevListPageModule {}
