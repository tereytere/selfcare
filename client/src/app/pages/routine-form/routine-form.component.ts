import { ProductService } from './../../services/product.service';
import { RoutineService } from './../../services/routine.service';
import { Component, inject, } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { Product } from '../../interfaces/product.interface';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonComponent } from '../../components/button/button.component';
import { InputTextModule } from 'primeng/inputtext';
import Swal from 'sweetalert2';



@Component({
  selector: 'routine-form',
  standalone: true,
  imports: [ButtonModule, FloatLabelModule, FormsModule, ReactiveFormsModule, MultiSelectModule, DropdownModule, ButtonComponent, InputTextModule],
  templateUrl: './routine-form.component.html',
  styleUrl: './routine-form.component.css'
})
export class RoutineFormComponent {


  private routineService = inject(RoutineService);
  private productService = inject(ProductService);
  private router = inject(Router);




  formulario: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
    applyschedule: new FormControl('', Validators.required),
    repeat: new FormControl([], Validators.required),
    products: new FormControl([], Validators.required),
    usesteps: new FormControl(''),
    description: new FormControl('')


  })
  errores: { message: string }[] = [];
  productsAvailable: Product[] = [];
  repeatOptions: { label: string, value: string }[] = [];



  ngOnInit(): void {
    this.loadProducts();
    this.initializeRepeatOptions();
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
  initializeRepeatOptions() {
    this.repeatOptions = [
      { label: 'Lunes', value: 'lunes' },
      { label: 'Martes', value: 'martes' },
      { label: 'Miércoles', value: 'miercoles' },
      { label: 'Jueves', value: 'jueves' },
      { label: 'Viernes', value: 'viernes' },
      { label: 'Sábado', value: 'sabado' },
      { label: 'Domingo', value: 'domingo' },
      { label: 'Semanal', value: 'semanal' },
      { label: 'Mensual', value: 'mensual' }
    ];
  }



  async onSubmit() {
    try {
      console.log(this.formulario.value);

      const response = await this.routineService.create(this.formulario.value);
      console.log(response);

      await Swal.fire({
        title: 'Registrado correctamente!',
        text: 'Te has registrado correctamente. Disfruta de nuestros servicios!',
        icon: 'success'
      });
      this.router.navigate(['/routines']);
    } catch (error) {
      this.errores = [{ message: 'An error occurred' }];
      console.error('Error creating routine', error);
    }
  }
}








