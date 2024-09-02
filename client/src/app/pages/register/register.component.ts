import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { CITY_COORDINATES } from '../../data/city-coordinates';
import { FileUploadModule } from 'primeng/fileupload';
import { ButtonComponent } from '../../components/button/button.component';
import Swal from 'sweetalert2';


@Component({
  selector: 'register',
  standalone: true,
  imports: [ButtonModule, FloatLabelModule, FormsModule, ReactiveFormsModule, InputTextModule, FileUploadModule, ButtonComponent],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {



  private userService = inject(UserService);
  private router = inject(Router);
  cities: string[] = [];
  ngOnInit(): void {
    this.loadCities();
  }

  loadCities(): void {
    this.cities = Object.keys(CITY_COORDINATES);
  }

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
    if (this.formulario.valid) {
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
        console.log(response.message);

        await Swal.fire({
          title: 'Registrado correctamente!',
          text: 'Te has registrado correctamente. Disfruta de nuestros servicios!',
          icon: 'success'
        });
        this.router.navigate(['/login']);

      } catch (error) {
        this.errores = [{ message: 'An error occurred' }];
        console.error('Error registering user', error);
        Swal.fire('Error', 'El email ya existe', 'error')
      }

    } else {
      Swal.fire('Error', 'Revisa los campos del formulario', 'error')
    }
  }
}

