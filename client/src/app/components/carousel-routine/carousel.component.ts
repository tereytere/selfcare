import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { ProductService } from '../../services/product.service';
import { Product } from '../../interfaces/product.interface';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'carousel-routine',
  standalone: true,
  imports: [CarouselModule, ButtonModule, TagModule, CardModule],
  providers: [ProductService],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselRoutine {
  toproutines = [

  ]

  products: Product[] | undefined;

  responsiveOptions: any[] | undefined;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getAll(1, 5).then((products) => {
      this.products = products;
    });


  }

}