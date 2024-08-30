import { Component, inject } from '@angular/core';
import { RoutineService } from './../../services/routine.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Routine } from './../../interfaces/routine.interface';
import { DividerModule } from 'primeng/divider';
import { ListboxModule } from 'primeng/listbox';
import { Product } from '../../interfaces/product.interface';
import { ProductService } from '../../services/product.service';
import { TableModule } from 'primeng/table';



@Component({
  selector: 'detail-routine',
  standalone: true,
  imports: [DividerModule, ListboxModule, TableModule],
  templateUrl: './detail-routine.component.html',
  styleUrl: './detail-routine.component.css'
})
export class DetailRoutineComponent {
  router = inject(Router);

  routineService = inject(RoutineService);
  productService = inject(ProductService);
  activatedRoute = inject(ActivatedRoute);


  routine: Routine | null = null;
  routineProducts: Product[] = [];

  ngOnInit() {
    this.activatedRoute.params.subscribe(async params => {
      const response = await this.routineService.getById(params['id']);
      this.routine = response.data;
      if (this.routine.products.length > 0) {
        this.routine.products.forEach(async product => {
          const responseProducts = await this.productService.getById(product);
          this.routineProducts.push(responseProducts.data);
        });
      }
    })
  }
}
