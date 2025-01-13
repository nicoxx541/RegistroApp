import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginPage } from './page/login/login.page';
import { RecuperarPage } from './page/recuperar/recuperar.page';


const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./page/login/login.page').then(m => m.LoginPage)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'recuperar',
    loadComponent: () => import('./page/recuperar/recuperar.page').then(m => m.RecuperarPage)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'registro',
    loadComponent: () => import('./page/registro/registro.page').then(m => m.RegistroPage)
  },
  {
    path: 'bienvenido',
    loadChildren: () => import('./page/bienvenido/bienvenido.module').then( m => m.BienvenidoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
