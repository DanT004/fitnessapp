import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpperbodyListPageRoutingModule } from './upperbody-list-routing.module';

import { UpperbodyListPage } from './upperbody-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpperbodyListPageRoutingModule
  ],
  declarations: [UpperbodyListPage]
})
export class UpperbodyListPageModule {}
