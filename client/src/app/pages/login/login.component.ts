import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { TriStateCheckboxModule } from 'primeng/tristatecheckbox';


@Component({
  selector: 'app-login',
  standalone:true,
  imports:[],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
  
})
export class LoginComponent {
 
  model: any = {};
  
  emailError: string | null = null;
  passwordError: string | null = null;

  
  onSubmit(event: Event): void {
    event.preventDefault(); 
    this.emailError = null;
    this.passwordError = null;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;
    let isValid = true;

    if (!email) {
      this.emailError = 'El correo electrónico es requerido.';
      isValid = false;
    } else if (!this.validateEmail(email)) {
      this.emailError = 'El correo electrónico no es válido.';
      isValid = false;
    }

    if (!password) {
      this.passwordError = 'La contraseña es requerida.';
      isValid = false;
    }

    if (isValid) {
      console.log('Formulario enviado', { email, password });

    } else {
    
      console.error('Formulario no válido');
    }
  }

 
  validateEmail(email: string): boolean {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }
  isFormValid(): boolean {
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;
    return email !== '' && this.validateEmail(email) && password !== '';
  }
}


