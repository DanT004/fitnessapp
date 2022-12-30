import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrevListPage } from './prev-list.page';

const routes: Routes = [
  {
    path: '',
    component: PrevListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrevListPageRoutingModule {}
