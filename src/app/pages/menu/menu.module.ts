import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children:[
      {
        path: 'cont1',
        loadChildren: '../cont1/cont1.module#Cont1PageModule'
      },{
        path: 'historial',
        loadChildren: '../historial/historial.module#HistorialPageModule'
      }
      ,{
        path: 'peso',
        loadChildren: '../nuevo-peso/nuevo-peso.module#NuevoPesoPageModule'
      }
    ]

    
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}
