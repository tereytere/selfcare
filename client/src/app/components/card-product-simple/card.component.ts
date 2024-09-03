import { Component, Input, ViewEncapsulation, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'card-product-simple',
  standalone: true,
  imports: [CardModule, ButtonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
  encapsulation: ViewEncapsulation.None
})
export class CardProductSimpleComponent {

  @Input() product: Product | null = null;

  router = inject(Router);
  onClickProduct(): void {
    if (this.product) {
      this.router.navigate([`/product/${this.product._id}`]);
    }
  }

}


