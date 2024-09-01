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

  formulario: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    brand: new FormControl('', [Validators.required]),
    category: new FormControl<ProductCategory | null>(null, [Validators.required]),
    properties: new FormControl('', [Validators.required]),
    shoplink: new FormControl('', [Validators.required]),
    image: new FormControl(null)
  });

  ngOnInit() {
    this.categories = [
      { name: 'Face', code: 'face' },
      { name: 'Body', code: 'body' },
      { name: 'Mouth', code: 'mouth' },
      { name: 'Hair', code: 'hair' },
      { name: 'Hands', code: 'hands' },
      { name: 'Feet', code: 'feet' }
    ];
  }

  /*   onImageSelect(event: any) {
      const file = event.currentFiles[0];
      if (file) {
        this.formulario.patchValue({ image: file });
      }
    } */
  //
  onImageSelect(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.formulario.patchValue({
        image: file
      });
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
