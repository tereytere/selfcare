import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http'; 
import { CommonModule } from '@angular/common'; 
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule, 
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    HttpClientModule 
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formulario: FormGroup;

  emailError: string | null = null;
  passwordError: string | null = null;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router 
  ) {
    this.formulario = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    this.emailError = null;
    this.passwordError = null;

    if (this.formulario.valid) {
      const { email, password } = this.formulario.value;


      this.http.post(`http://localhost:5000/login `, { email, password })
        .subscribe({
          next: (response: any) => {
            console.log('Login exitoso', response);
            this.router.navigate(['http://localhost:5000/getAll']);
          },
          error: (error) => {
            console.error('Error en el login', error);
            if (error.status === 403) {
              this.passwordError = 'Contraseña incorrecta.';
            } else if (error.status === 404) {
              this.emailError = 'El correo electrónico no existe.';
            } else {
              console.error('Error desconocido', error);
            }
          }
        });
    } else {
      this.validateForm();
      console.error('Formulario no válido');
    }
  }

  validateForm(): void {
    const emailControl = this.formulario.get('email');
    const passwordControl = this.formulario.get('password');

    if (emailControl?.invalid) {
      if (emailControl.errors?.['required']) {
        this.emailError = 'El correo electrónico es requerido.';
      } else if (emailControl.errors?.['email']) {
        this.emailError = 'El correo electrónico no es válido.';
      }
    }

    if (passwordControl?.invalid) {
      this.passwordError = 'La contraseña es requerida.';
    }
  }

  isFormValid(): boolean {
    return this.formulario.valid;
  }
}
