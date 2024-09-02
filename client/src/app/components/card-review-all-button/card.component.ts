import { Component, Input, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
import { ReactiveFormsModule, FormControl } from '@angular/forms'
import { Review } from '../../interfaces/review.inteface';
import { ReviewService } from '../../services/review.service';
import { ButtonComponent } from '../button/button.component';


//Lógica del componenete e incluyo la gestión de los datos de entrada y la navegacion al hacer el click en "Ver más"
@Component({
  selector: 'card-review-all-edit',
  standalone: true,
  imports: [CardModule, ButtonModule, RatingModule, ReactiveFormsModule, ButtonComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardReviewAllComponentEdit implements OnInit {

  @Input() review: Review | null = null;

  starsControl: FormControl = new FormControl(0);

  reviewService = inject(ReviewService)
  router = inject(Router);

  ngOnInit() {
    if (this.review) {
      this.starsControl.setValue(this.review.stars);
    }
  }

  async onErase(reviewId: any) {
    const response = await this.reviewService.deleteById(reviewId);
    console.log(response.message);

  }

  async onEdit(reviewId: any) {
    const response = await this.reviewService.deleteById(reviewId);
    console.log(response.message);

  }
  /*  onViewMore() {
    this.router.navigate(['/routine', this.routineId]);
   } */

}



