import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidoPage } from './bienvenido.page'; // Importa el componente

const routes: Routes = [
  {
    path: '',
    component: BienvenidoPage // Utiliza el componente directamente
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BienvenidoPageRoutingModule {}
