import { Component, Input, OnInit, ViewEncapsulation, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { Routine } from '../../interfaces/routine.interface';
import { DatePipe } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import { Product } from '../../interfaces/product.interface';
import { ProductService } from '../../services/product.service';


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

  onViewMore(): void {
    if (this.routine) {
      this.router.navigate([`/routine/${this.routine._id}`]);
    }
  }
}


