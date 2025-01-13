import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms'; // Si usas formularios
import { CommonModule } from '@angular/common'; // Para directivas comunes como *ngIf o *ngFor
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    IonicModule, // Importa los módulos de Ionic
    FormsModule, // Para trabajar con formularios (opcional)
    CommonModule // Importa directivas comunes
  ]
})
export class LoginPage {
  constructor(private router: Router) {}

  bienvenido() {
    this.router.navigate(['/bienvenido']); 
   }}
