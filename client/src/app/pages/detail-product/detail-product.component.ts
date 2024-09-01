import { Component, inject, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { ImageModule } from 'primeng/image';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'detail-product',
  standalone: true,
  imports: [ImageModule, CardModule, ButtonModule],
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DetailProductComponent {
  router = inject(Router);

  product: Product | null = null;
  relatedProducts: Product[] = [];

  activatedRoute = inject(ActivatedRoute);
  productService = inject(ProductService);

  selectedProduct!: Product;

  // Recuperar el id del producto cuando arranca el componente
  async ngOnInit() {
    this.activatedRoute.params.subscribe(async params => {
      const response = await this.productService.getById(params['id']);
      this.product = response.data;

      if (this.product) {
        await this.loadRelatedProducts(this.product.category);
      }
    });
  }

  // Cargar productos relacionados por categoría
  async loadRelatedProducts(category: string) {
    try {
      const allProductsResponse = await this.productService.getAll(1, 10); // Ajusta el paginado según sea necesario
      const allProducts: Product[] = allProductsResponse.data;

      // Filtrar productos relacionados por categoría
      this.relatedProducts = allProducts.filter(product =>
        product._id !== this.product?._id && product.category === category
      );
    } catch (error) {
      console.error('Error al cargar productos relacionados:', error);
    }
  }

  onRowSelect(event: any) {
    console.log(event.data._id);
    this.router.navigateByUrl(`/product/${event.data._id}`);
  }
}
