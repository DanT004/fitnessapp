import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpperbodyListPage } from './upperbody-list.page';

const routes: Routes = [
  {
    path: '',
    component: UpperbodyListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpperbodyListPageRoutingModule {}
