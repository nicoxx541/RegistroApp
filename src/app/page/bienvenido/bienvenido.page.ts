import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular'; // Importa IonicModule
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.page.html',
  styleUrls: ['./bienvenido.page.scss'],
  standalone: true, // Indica que es standalone
  imports: [IonicModule, CommonModule, FormsModule], // Agrega IonicModule aquí
})
export class BienvenidoPage {
  constructor(private router: Router) {}

  logout() {
    this.router.navigate(['/login']); // Reemplaza '/login' con la ruta de tu página de inicio de sesión
  }}
