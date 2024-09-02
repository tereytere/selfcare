import { Component, inject, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from "../../components/button/button.component";
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { FloatLabelModule } from 'primeng/floatlabel';
import Swal from 'sweetalert2';
import { InputTextModule } from 'primeng/inputtext';


@Component({
  selector: 'login',
  standalone: true,
  imports: [ButtonComponent, ReactiveFormsModule, FloatLabelModule, InputTextModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  encapsulation: ViewEncapsulation.None

})
export class LoginComponent {

  private userService = inject(UserService);
  router = inject(Router);
  value: string | undefined;

  formulario: FormGroup = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.email])
  })

  async onSubmit() {
    try {
      const response = await this.userService.login(this.formulario.value);
      this.router.navigateByUrl('/home');
    } catch (error) {
      Swal.fire('Error', 'Email o contraseña incorrectos', 'error')
    }
  }

  toRegister() {
    this.router.navigateByUrl('/registro');
  }


}


