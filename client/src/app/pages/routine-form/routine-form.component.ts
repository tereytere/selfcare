import { ProductService } from './../../services/product.service';
import { RoutineService } from './../../services/routine.service';
import { Component, inject, OnInit, } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { Product } from '../../interfaces/product.interface';
import { MultiSelectModule } from 'primeng/multiselect';

@Component({
  selector: 'routine-form',
  standalone: true,
  imports: [ButtonModule, FloatLabelModule, FormsModule, ReactiveFormsModule, MultiSelectModule],
  templateUrl: './routine-form.component.html',
  styleUrl: './routine-form.component.css'
})
export class RoutineFormComponent implements OnInit {


  private routineService = inject(RoutineService);
  private productService = inject(ProductService);
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
  productsAvailable: Product[] = [];


  ngOnInit(): void {
    this.loadProducts();
  }

  async loadProducts() {
    try {
      const response = await this.productService.getAll(1, 20);
      this.productsAvailable = response.data;
    } catch (error) {
      console.error('Error loading products', error);
      this.errores.push({ message: 'Failed to load products' });
    }
  }

  async onSubmit() {
    try {
      const response = await this.routineService.create(this.formulario.value);
      this.router.navigate(['/routines']);
    } catch (error) {
      this.errores = [{ message: 'An error occurred' }];
      console.error('Error creating routine', error);
    }
  }
}








