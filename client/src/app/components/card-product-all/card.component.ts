import { Component, Input, ViewEncapsulation, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { Product } from '../../interfaces/product.interface';
import { ButtonComponent } from '../button/button.component';


//Lógica del componenete e incluyo la gestión de los datos de entrada y la navegacion al hacer el click en "Ver más"
@Component({
  selector: 'card-product-all',
  standalone: true,
  imports: [CardModule, ButtonModule, ButtonComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
  encapsulation: ViewEncapsulation.None
})
export class CardProductAllComponent {

  @Input() product: Product | null = null;

  router = inject(Router);
  onViewMore(): void {
    if (this.product) {
      this.router.navigate([`/product/${this.product._id}`]);
    }
  }

  getFormattedLink(link?: string): string {
    if (!link) return '#';
    if (!/^https?:\/\//i.test(link)) {
      return 'http://' + link;
    }
    return link;
  }
}







