import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http'; 
import { CommonModule } from '@angular/common'; 
import { ReactiveFormsModule } from '@angular/forms';
import { TriStateCheckboxModule } from 'primeng/tristatecheckbox';
import { ButtonComponent } from "../../components/button/button.component";


@Component({
  selector: 'login',
  standalone: true,
  imports: [ButtonComponent, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']

})
export class LoginComponent {

  formulario: FormGroup = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  });


  model: any = {};

  emailError: string | null = null;
  passwordError: string | null = null;


  onSubmit(event: Event): void {
    event.preventDefault();
    this.emailError = null;
    this.passwordError = null;

    if (this.formulario.valid) {
      const { email, password } = this.formulario.value;
    }}

  //     this.http.post(`http://localhost:5000/login `, { email, password })
  //       .subscribe({
  //         next: (response: any) => {
  //           console.log('Login exitoso', response);
  //           this.router.navigate(['/home']);
  //         },
  //         error: (error) => {
  //           console.error('Error en el login', error);
  //           if (error.status === 403) {
  //             this.passwordError = 'Contraseña incorrecta.';
  //           } else if (error.status === 404) {
  //             this.emailError = 'El correo electrónico no existe.';
  //           } else {
  //             console.error('Error desconocido', error);
  //           }
  //         }
  //       });
  //   } else {
  //     console.error('Formulario no válido');
  //   }
  // }


  // validateEmail(email: string): boolean {
  //   const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   return emailPattern.test(email);
  // }

  // isFormValid(): boolean {
  //   return this.formulario.valid;
  // }

  }