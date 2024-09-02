import { Component, Input, inject, OnInit, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
import { ReactiveFormsModule, FormControl, FormsModule } from '@angular/forms'
import { Review } from '../../interfaces/review.inteface';
import { DatePipe } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import { ReviewService } from '../../services/review.service';
import { ReviewFormComponent } from '../review-form/review-form.component';


//Lógica del componenete e incluyo la gestión de los datos de entrada y la navegacion al hacer el click en "Ver más"
@Component({
  selector: 'card-review-all',
  standalone: true,
  imports: [CardModule, ButtonModule, RatingModule, ReactiveFormsModule, FormsModule, DatePipe, ButtonComponent, ReviewFormComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
  encapsulation: ViewEncapsulation.None
})
export class CardReviewAllComponent {

  @Input() review: Review | null = null;
  @Input() stars: number | null = null;
  @Input() userId: string | null = null;

  @Output() reviewErased: EventEmitter<string> = new EventEmitter();
  @Output() reviewEdited: EventEmitter<string> = new EventEmitter();

  //starsControl: FormControl = new FormControl(0);
  reviewService = inject(ReviewService);
  router = inject(Router);

  isEdit: boolean = false;

  async onErase(reviewId: any) {
    const response = await this.reviewService.deleteById(reviewId);
    console.log(response.message);
    this.reviewErased.emit(response.message);

  }

  toggleEdit() {
    this.isEdit = true;
  }

  onReviewUpdated() {
    this.isEdit = false;
    this.reviewEdited.emit();
  }

}



