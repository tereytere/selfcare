import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';


@Component({
  selector: 'register',
  standalone: true,
  imports: [ButtonModule, FloatLabelModule, FormsModule, ReactiveFormsModule,],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {



  private userService = inject(UserService);
  private router = inject(Router);

  formulario: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    location: new FormControl('', Validators.required),
    about: new FormControl(''),
    image: new FormControl()
  })
  errores: { message: string }[] = [];

  onUpload(event: any) {
    const input = event.target as HTMLInputElement;
    if (input && input.files && input.files.length > 0) {
      const file = input.files[0];
      this.formulario.patchValue({ image: file });
    }

  }

  async onSubmit() {
    try {
      const formData = new FormData();

      Object.keys(this.formulario.controls).forEach(key => {
        const control = this.formulario.get(key);
        if (key === 'image' && control?.value) {
          formData.append(key, control.value);
        } else {
          formData.append(key, control?.value);
        }
      });
      const response = await this.userService.register(formData);
      this.router.navigate(['/login']);
    } catch (error) {
      this.errores = [{ message: 'An error occurred' }];
      console.error('Error registering user', error);
    }
  }
}

