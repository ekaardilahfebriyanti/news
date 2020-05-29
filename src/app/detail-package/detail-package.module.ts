import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailPackagePageRoutingModule } from './detail-package-routing.module';

import { DetailPackagePage } from './detail-package.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailPackagePageRoutingModule
  ],
  declarations: [DetailPackagePage]
})
export class DetailPackagePageModule {}
