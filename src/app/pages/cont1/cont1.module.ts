import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Cont1Page } from './cont1.page';

const routes: Routes = [
  {
    path: 'saltos',
    component: Cont1Page,
    children:[
      {
        path:'inicio',
        loadChildren: '../inicio/inicio.module#InicioPageModule'
      },{
        path:'alimentos',
        loadChildren: '../alimentos/alimentos.module#AlimentosPageModule'
      }
    ]
  },

  {
    path: '',
    redirectTo: 'saltos/inicio',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Cont1Page]
})
export class Cont1PageModule {}
