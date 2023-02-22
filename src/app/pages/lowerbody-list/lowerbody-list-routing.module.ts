import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LowerbodyListPage } from './lowerbody-list.page';

const routes: Routes = [
  {
    path: '',
    component: LowerbodyListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LowerbodyListPageRoutingModule {}
