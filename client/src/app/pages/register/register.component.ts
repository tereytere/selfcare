import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'register',
  standalone: true,
  imports: [ReactiveFormsModule, InputTextModule, FloatLabelModule, ButtonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  formulario: FormGroup = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
  });

  userService = inject(UserService);
  router = inject(Router);

  async onSubmit() {
    try {
      const response = await this.userService.register(this.formulario.value);
      console.log(response);
      this.router.navigateByUrl('/login');
    } catch (error: any) {
    }
  }

}
