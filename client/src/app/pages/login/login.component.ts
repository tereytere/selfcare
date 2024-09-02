// import { Component, inject } from '@angular/core';
// import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
// import { Component } from '@angular/core';
// import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
// import { HttpClient, HttpClientModule } from '@angular/common/http'; 
// import { CommonModule } from '@angular/common'; 
// import { ReactiveFormsModule } from '@angular/forms';
// import { TriStateCheckboxModule } from 'primeng/tristatecheckbox';
// import { ButtonComponent } from "../../components/button/button.component";
// import { UserService } from '../../services/user.service';
// import { Router } from '@angular/router';
// import { FloatLabelModule } from 'primeng/floatlabel';


// @Component({
//   selector: 'login',
//   standalone: true,
//   imports: [ButtonComponent, ReactiveFormsModule, FloatLabelModule],
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']

// })
// export class LoginComponent {

//   formulario: FormGroup = new FormGroup({
//     email: new FormControl(),
//     password: new FormControl(),
//   });


//   private userService = inject(UserService);
//   private router = inject(Router);

//   formulario: FormGroup = new FormGroup({
//     email: new FormControl('', Validators.required),
//     password: new FormControl('', [Validators.required, Validators.email])
//   })

//   async onSubmit() {
//     try {
//       const response = await this.userService.login(this.formulario.value);
//       this.router.navigate(['/home']);
//     } catch (error) {
//       console.error('Error registering user', error);
//     }
//   }


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
