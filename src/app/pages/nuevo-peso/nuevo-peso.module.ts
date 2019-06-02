import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NuevoPesoPage } from './nuevo-peso.page';

const routes: Routes = [
  {
    path: '',
    component: NuevoPesoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NuevoPesoPage]
})
export class NuevoPesoPageModule {}
