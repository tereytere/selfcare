import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { CITY_COORDINATES } from '../../data/city-coordinates';


@Component({
  selector: 'register',
  standalone: true,
  imports: [ButtonModule, FloatLabelModule, FormsModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  cities: string[] = [];


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

  ngOnInit(): void {
    this.loadCities();
  }

  loadCities(): void {
    this.cities = Object.keys(CITY_COORDINATES);
  }

  onUpload(event: any) {
    const input = event.target as HTMLInputElement;
    if (input && input.files && input.files.length > 0) {
      const file = input.files[0];
      this.formulario.patchValue({ image: file.name });
    }

  }

  async onSubmit() {
    try {
      const response = await this.userService.register(this.formulario.value);
      this.router.navigate(['/login']);
    } catch (error) {
      this.errores = [{ message: 'An error occurred' }];
      console.error('Error registering user', error);
    }
  }
}


