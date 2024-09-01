import { Component, Input, inject, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
import { ReactiveFormsModule, FormControl, FormsModule } from '@angular/forms'
import { Review } from '../../interfaces/review.inteface';
import { DatePipe } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import { ReviewService } from '../../services/review.service';


//Lógica del componenete e incluyo la gestión de los datos de entrada y la navegacion al hacer el click en "Ver más"
@Component({
  selector: 'card-review-all',
  standalone: true,
  imports: [CardModule, ButtonModule, RatingModule, ReactiveFormsModule, FormsModule, DatePipe, ButtonComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardReviewAllComponent {

  @Input() review: Review | null = null;
  @Input() stars: number | null = null;
  @Input() userId: string | null = null;

  @Output() reviewErased: EventEmitter<string> = new EventEmitter();

  //starsControl: FormControl = new FormControl(0);
  reviewService = inject(ReviewService);
  router = inject(Router);

  // ngOnInit() {
  //   if (this.review) {
  //     this.value.setValue(this.review.stars);
  //   }
  // }
  async onErase(reviewId: any) {
    const response = await this.reviewService.deleteById(reviewId);
    console.log(response.message);
    this.reviewErased.emit(response.message);

  }

  /*  onViewMore() {
    this.router.navigate(['/routine', this.routineId]);
   } */

}



