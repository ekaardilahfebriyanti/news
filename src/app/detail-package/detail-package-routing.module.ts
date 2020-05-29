import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailPackagePage } from './detail-package.page';

const routes: Routes = [
  {
    path: '',
    component: DetailPackagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailPackagePageRoutingModule {}
