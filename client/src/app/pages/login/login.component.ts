import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http'; 
import { CommonModule } from '@angular/common'; 
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';
import { DividerModule } from 'primeng/divider';
@Component({
<<<<<<< HEAD
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule, 
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    HttpClientModule ,
    DividerModule 
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formulario: FormGroup;
=======
  selector: 'login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']

})
export class LoginComponent {

  model: any = {};
>>>>>>> 65aee31145e30edd60d115ab57a0852917d5a734

  emailError: string | null = null;
  passwordError: string | null = null;

<<<<<<< HEAD
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
=======

  onSubmit(event: Event): void {
    event.preventDefault();
>>>>>>> 65aee31145e30edd60d115ab57a0852917d5a734
    this.emailError = null;
    this.passwordError = null;

    if (this.formulario.valid) {
      const { email, password } = this.formulario.value;


      this.http.post(`http://localhost:5000/login `, { email, password })
        .subscribe({
          next: (response: any) => {
            console.log('Login exitoso', response);
            this.router.navigate(['http://localhost:5000/home']);
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
<<<<<<< HEAD
      this.validateForm();
=======

>>>>>>> 65aee31145e30edd60d115ab57a0852917d5a734
      console.error('Formulario no válido');
    }
  }

<<<<<<< HEAD
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
=======

  validateEmail(email: string): boolean {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
>>>>>>> 65aee31145e30edd60d115ab57a0852917d5a734
  }

  isFormValid(): boolean {
    return this.formulario.valid;
  }
}
