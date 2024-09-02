import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
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
  imports: [
    ReactiveFormsModule,
    InputTextModule,
    FloatLabelModule,
    DropdownModule,
    ButtonModule,
    FileUploadModule
  ],
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'] // Corregido 'styleUrl' a 'styleUrls'
})
export class ProductFormComponent {

  errores: { field: string, message: string }[] = [];
  categories: ProductCategory[] = [];
  file: File | null = null;

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
    if (this.formulario.invalid) {
      this.errores.push({ field: 'general', message: 'Por favor, completa todos los campos requeridos.' });
      return;
    }

    try {
      const formData = new FormData();

      Object.keys(this.formulario.controls).forEach(key => {
        const control = this.formulario.get(key);
        if (key === 'image' && control?.value) {
          formData.append(key, control.value);
        } else if (key === 'category') {
          formData.append(key, control?.value.code);
        } else {
          formData.append(key, control?.value);
        }
      });

      const response = await this.productsService.addProduct(formData);
      console.log(response.message);

      await Swal.fire({
        title: 'Producto creado correctamente',
        text: '¡Se ha creado el producto! Puedes verlo en la lista ahora.',
        icon: 'success'
      });

      this.router.navigateByUrl('/products');
    } catch (error: any) {
      console.error('Error al crear el producto:', error);
      this.errores = error.error || [{ field: 'general', message: 'Ocurrió un error inesperado.' }];
    }

  }
}
