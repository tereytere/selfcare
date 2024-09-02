import { Component, inject, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from "../../components/button/button.component";
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { FloatLabelModule } from 'primeng/floatlabel';
import Swal from 'sweetalert2';
import { InputTextModule } from 'primeng/inputtext';
import { StyleClassModule } from 'primeng/styleclass';


@Component({
  selector: 'login',
  standalone: true,
  imports: [ButtonComponent, ReactiveFormsModule, FloatLabelModule, InputTextModule, StyleClassModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  encapsulation: ViewEncapsulation.None

// })
// export class LoginComponent {

  private userService = inject(UserService);
  private router = inject(Router);
  value: string | undefined;

  formulario: FormGroup = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.email])
  })

  async onSubmit() {
    try {
      const response = await this.userService.login(this.formulario.value);
      this.router.navigate(['/home']);
    } catch (error) {
      Swal.fire('Error', 'Email o contraseña incorrectos', 'error')
    }
  }


// }



//   model: any = {};

//   emailError: string | null = null;
//   passwordError: string | null = null;


//   onSubmit(event: Event): void {
//     event.preventDefault();
//     this.emailError = null;
//     this.passwordError = null;

//     if (this.formulario.valid) {
//       const { email, password } = this.formulario.value;
//     }}
//   }
  //    this.http.post(`http://localhost:5000/login `, { email, password })
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
