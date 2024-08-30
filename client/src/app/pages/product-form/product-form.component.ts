import { Component, EventEmitter, Output, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Category, Product } from '../../interfaces/product.interface';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { JsonPipe } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';
import { InputLabelComponent } from '../../components/input-label/input-label.component';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import Swal from 'sweetalert2';




@Component({
  selector: 'product-form',
  standalone: true,
  imports: [FormsModule, InputLabelComponent, InputTextModule, FloatLabelModule, DropdownModule, ButtonModule, ReactiveFormsModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent {

  errores: { field: string, message: string }[] = [];

  category = [
    { name: 'face', code: 'face' },
    { name: 'body', code: 'body' },
    { name: 'mouth', code: 'mouth' },
    { name: 'hair', code: 'hair' },
    { name: 'hands', code: 'hands' },
    { name: 'feet', code: 'feet' }
  ];

  formulario: FormGroup = new FormGroup({
    name: new FormControl(),
    brand: new FormControl(),
    category: new FormControl(),
    properties: new FormControl(),
    shoplink: new FormControl(),
    image: new FormControl(),
    createdAt: new FormControl(),
    updatedAt: new FormControl()
  });

  productsService = inject(ProductService);
  router = inject(Router);
  async onSubmit() {
    if (this.formulario.value.category)
      this.formulario.value.category = this.formulario.value.category.code;
    try {
      const response = await this.productsService.addProduct(this.formulario.value);
      // Avisa al usuario ADMIN que se ha insertado el producto correctamente
      await Swal.fire({
        title: 'Producto creado correctamente',
        text: 'Se ha creado el producto! Puedes verlo en la lista ahora',
        icon: 'success'
      });
      // Navegar a la lista de productos
      this.router.navigateByUrl('/products');
    } catch ({ error }: any) {
      this.errores = error;
    }
  }
}