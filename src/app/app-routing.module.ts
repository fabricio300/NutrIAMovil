import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'menu', loadChildren: './pages/menu/menu.module#MenuPageModule' },
  { path: 'nuevo-peso', loadChildren: './pages/nuevo-peso/nuevo-peso.module#NuevoPesoPageModule' },
  { path: 'cont1', loadChildren: './pages/cont1/cont1.module#Cont1PageModule' },
  { path: 'inicio', loadChildren: './pages/inicio/inicio.module#InicioPageModule' },
  { path: 'alimentos', loadChildren: './pages/alimentos/alimentos.module#AlimentosPageModule' },
  { path: 'historial', loadChildren: './pages/historial/historial.module#HistorialPageModule' },
  { path: 'modal', loadChildren: './pages/modal/modal.module#ModalPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
