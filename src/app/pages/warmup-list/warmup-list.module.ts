import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WarmupListPageRoutingModule } from './warmup-list-routing.module';

import { WarmupListPage } from './warmup-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WarmupListPageRoutingModule
  ],
  declarations: [WarmupListPage]
})
export class WarmupListPageModule {}
