import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WarmupListPageRoutingModule } from './warmup-list-routing.module';

import { WarmupListPage } from './warmup-list.page';
import { ExerciseComponent } from "../../components/exercise/exercise.component";

@NgModule({
    declarations: [WarmupListPage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        WarmupListPageRoutingModule,
        ExerciseComponent
    ]
})
export class WarmupListPageModule {}
