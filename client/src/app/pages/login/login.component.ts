import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from "../../components/button/button.component";
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { FloatLabelModule } from 'primeng/floatlabel';
import Swal from 'sweetalert2';


@Component({
  selector: 'login',
  standalone: true,
  imports: [ButtonComponent, ReactiveFormsModule, FloatLabelModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']

})
export class LoginComponent {

  private userService = inject(UserService);
  private router = inject(Router);

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


}


