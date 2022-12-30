import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrevExePage } from './prev-exe.page';

const routes: Routes = [
  {
    path: '',
    component: PrevExePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrevExePageRoutingModule {}
