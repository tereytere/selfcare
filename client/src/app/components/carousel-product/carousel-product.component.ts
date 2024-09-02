import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'carousel-products',
  standalone: true,
  imports: [CarouselModule, CardModule],
  templateUrl: './carousel-product.component.html',
  styleUrls: ['./carousel-product.component.css']
})
export class CarouselProduct     {
  // Datos de productos
  products = [
    { 
      name: 'Producto 1', 
      category: 'product1', // Categoría para construir la URL
      description: 'Descripción breve del Producto 1.'
    },
    { 
      name: 'Producto 2', 
      category: 'product2', 
      description: 'Descripción breve del Producto 2.'
    },
    { 
      name: 'Producto 3', 
      category: 'product3', 
      description: 'Descripción breve del Producto 3.'
    },
    { 
      name: 'Producto 4', 
      category: 'product4', 
      description: 'Descripción breve del Producto 4.'
    },
    { 
      name: 'Producto 5', 
      category: 'product5', 
      description: 'Descripción breve del Producto 5.'
    }
  ].map(product => ({
    ...product,
    imageUrl: `/images/${product}.jpg` 
  }));

  // Opciones de respuesta para el carrusel
  responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 3
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 2
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1
    }
  ];
}
