import { Component, Input, OnInit, ViewEncapsulation, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { Routine } from '../../interfaces/routine.interface';
import { DatePipe } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import { Product } from '../../interfaces/product.interface';
import { ProductService } from '../../services/product.service';



//Lógica del componenete e incluyo la gestión de los datos de entrada y la navegacion al hacer el click en "Ver más"
@Component({
  selector: 'card-routine-all',
  standalone: true,
  imports: [CardModule, ButtonModule, DatePipe, ButtonComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
  encapsulation: ViewEncapsulation.None

})
export class CardRoutineAllComponent implements OnInit {

  @Input() routine: Routine | null = null;
  products: Product[] = [];

  router = inject(Router);
  private productService = inject(ProductService);

  async ngOnInit() {
    if (this.routine && this.routine.products.length > 0) {

      for (let productId of this.routine.products) {
        const response = await this.productService.getById(productId);
        if (response && response.data) {
          this.products.push(response.data);
        }
      }
    }
  }

  /*  getCategoryImage(category: string | undefined): string {
     if (!category) {
       return '/images/default.jpg';
     }
     switch (category) {
       case 'body':
         return '/images/2-body-selfcare.jpg';
       case 'face':
         return '/images/2-face-selfcare.jpg';
       case 'mouth':
         return '/images/2-mounth-selfcare.jpg';
       case 'hair':
         return '/images/hair-selfcare.jpg';
       case 'hands':
         return '/images/hands-selfcare.jpg';
       case 'feet':
         return '/images/feet-selfcare.jpg';
       case 'beard':
         return '/images/3-beard:face-selfcare.jpg';
       default:
         return '/images/default.jpg';
     }
   } */


  onViewMore(): void {
    if (this.routine) {
      this.router.navigate([`/routine/${this.routine._id}`]);
    }
  }
}


