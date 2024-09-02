import { Component, EventEmitter, Output, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { JsonPipe } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import Swal from 'sweetalert2';

interface ProductCategory {
  name: string;
  code: string;
}



@Component({
  selector: 'product-form',
  standalone: true,
  imports: [FormsModule, InputTextModule, FloatLabelModule, DropdownModule, ButtonModule, ReactiveFormsModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent {

  errores: { field: string, message: string }[] = [];
  category: ProductCategory[] | undefined;
  ngOnInit() {
    this.category = [
      { name: 'face', code: 'face' },
      { name: 'body', code: 'body' },
      { name: 'mouth', code: 'mouth' },
      { name: 'hair', code: 'hair' },
      { name: 'hands', code: 'hands' },
      { name: 'feet', code: 'feet' }
    ];
  }
  formulario: FormGroup = new FormGroup({
    name: new FormControl(),
    brand: new FormControl(),
    category: new FormControl<ProductCategory | null>(null),
    properties: new FormControl(),
    shoplink: new FormControl(),
    image: new FormControl(),
  });

  productsService = inject(ProductService);
  router = inject(Router);

  onUpload(event: any) {
    const input = event.target as HTMLInputElement;
    if (input && input.files && input.files.length > 0) {
      const file = input.files[0];
      this.formulario.patchValue({ image: file });
      console.log(file);
    }
  }


  async onSubmit() {
    // if (this.formulario.value.category) {
    //   this.formulario.value.category = this.formulario.value.category.code;
    //   console.log(this.formulario.value.category);
    // }

    try {
      const formData = new FormData();

      Object.keys(this.formulario.controls).forEach(key => {
        const control = this.formulario.get(key);
        if (key === 'image' && control?.value) {
          formData.append(key, control.value);
        } else if (key === 'category') {
          formData.append(key, control?.value.code);
        }
        else {
          formData.append(key, control?.value);
        }
      });
      const response = await this.productsService.addProduct(formData);

      console.log(response.message);

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