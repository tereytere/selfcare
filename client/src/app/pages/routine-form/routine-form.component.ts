import { RoutineService } from './../../services/routine.service';
import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
@Component({
  selector: 'routine',
  standalone: true,
  imports: [ButtonModule, FloatLabelModule, FormsModule, ReactiveFormsModule],
  templateUrl: './routine-form.component.html',
  styleUrl: './routine-form.component.css'
})
export class RoutineFormComponent {


  private RoutineService = inject(RoutineService)
  private router = inject(Router);

  formulario: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
    applyschedule: new FormControl('', Validators.required),
    repeat: new FormControl([], Validators.required),
    products: new FormControl([], Validators.required),
    usesteps: new FormControl([]),
    description: new FormControl('')


  })
  errores: { message: string }[] = [];

  async onSubmit() {
    try {
      const response = await this.RoutineService.create(this.formulario.value);
      this.router.navigate(['/routines']);
    } catch (error) {
      this.errores = [{ message: 'An error occurred' }];
      console.error('Error creating routine', error);
    }
  }
}








