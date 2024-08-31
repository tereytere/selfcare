import { Component, inject } from '@angular/core';
import { RoutineService } from './../../services/routine.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Routine } from './../../interfaces/routine.interface';
import { DividerModule } from 'primeng/divider';
import { ListboxModule } from 'primeng/listbox';
import { Product } from '../../interfaces/product.interface';
import { ProductService } from '../../services/product.service';
import { TableModule } from 'primeng/table';
import { ReviewService } from '../../services/review.service';
import { Review } from '../../interfaces/review.inteface';
import { CardModule } from 'primeng/card';



@Component({
  selector: 'detail-routine',
  standalone: true,
  imports: [DividerModule, ListboxModule, TableModule, CardModule],
  templateUrl: './detail-routine.component.html',
  styleUrl: './detail-routine.component.css'
})
export class DetailRoutineComponent {
  router = inject(Router);
  selectedProduct!: Product;

  routineService = inject(RoutineService);
  productService = inject(ProductService);
  reviewService = inject(ReviewService);
  activatedRoute = inject(ActivatedRoute);


  routine: Routine | null = null;
  routineProducts: Product[] = [];
  routineReviews: Review[] = [];

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
      if (this.routine.reviews) {
        this.routine.reviews.forEach(async review => {
          const responseReviews = await this.reviewService.getById(review);
          this.routineReviews.push(responseReviews.data);
        });
      }
    })
  }
  onRowSelect(event: any) {
    console.log(event.data._id);
    this.router.navigateByUrl(`/product/${event.data._id}`);


  }
}
