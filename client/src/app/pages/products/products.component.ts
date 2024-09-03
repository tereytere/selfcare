import { PaginatorModule } from 'primeng/paginator';
import { ProductService } from './../../services/product.service';
import { Component, OnInit, ViewEncapsulation, inject } from '@angular/core';
import { Product } from '../../interfaces/product.interface';
import { TableModule } from 'primeng/table'
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CardProductAllComponent } from '../../components/card-product-all/card.component';


@Component({
  selector: 'products',
  standalone: true,
  imports: [PaginatorModule, TableModule, InputTextModule, ButtonModule, CardProductAllComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
  encapsulation: ViewEncapsulation.None
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  currentPage: number = 1;
  totalPages: number = 1;
  itemsPerPage: number = 10;


  private productService = inject(ProductService);

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

  onPageChange(event: any): void {
    this.currentPage = event.page + 1;
    this.loadProducts(this.currentPage);
  }
}


