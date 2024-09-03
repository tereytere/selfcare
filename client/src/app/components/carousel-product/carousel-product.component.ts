import { Component, inject } from '@angular/core';
import { Product } from '../../interfaces/product.interface';
import { ProductService } from '../../services/product.service';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'carousel-product',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './carousel-product.component.html',
  styleUrl: './carousel-product.component.css'
})
export class CarouselProductComponent {
  products: Product[] = [];
  productService = inject(ProductService);
  currentPage: number = 1;
  totalPages: number = 1;
  itemsPerPage: number = 10;


  constructor() { }

  ngOnInit(): void {
    this.loadProducts(this.currentPage);

  }

  async loadProducts(page: number): Promise<void> {
    try {
      const response = await this.productService.getAll(page, this.itemsPerPage);
      this.products = response.data;
      this.totalPages = Math.ceil(response.totalProducts / this.itemsPerPage);
    } catch (error) {
      console.error('Error fetching routines', error);
    };
  }
}



