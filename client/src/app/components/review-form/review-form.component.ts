import { Component, EventEmitter, inject, Input, Output, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { RatingModule } from 'primeng/rating';
import { ButtonModule } from 'primeng/button';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from "../button/button.component";
import { ReviewService } from '../../services/review.service';
import { Review } from '../../interfaces/review.inteface';

@Component({
  selector: 'review-form',
  standalone: true,
  imports: [
    InputTextModule,
    RatingModule,
    ButtonModule,
    InputTextareaModule,
    ReactiveFormsModule,
    ButtonComponent
  ],
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ReviewFormComponent {
  reviewService = inject(ReviewService);

  reviewForm: FormGroup;

  @Input() routineId: string | null = null;
  @Input() userId: string | null = null;
  @Input() review: Review | null = null;

  @Output() reviewCreated: EventEmitter<string> = new EventEmitter();
  @Output() reviewUpdated: EventEmitter<string> = new EventEmitter();

  reviewId: any = null;

  constructor(private fb: FormBuilder) {
    this.reviewForm = this.fb.group({
      title: ['', Validators.required],
      stars: [0, Validators.required],
      description: ['', Validators.required],
    });
  }

  get starsControl(): FormControl {
    return this.reviewForm.get('stars') as FormControl;
  }

  async onSubmit() {
    if (this.reviewForm.valid) {
      console.log(this.reviewForm.value);
      const response = await this.reviewService.addReview(this.reviewForm.value, this.userId!, this.routineId!)
      console.log(response.message);
      this.reviewCreated.emit(response.message)

      // Maneja el envío del formulario, como, enviarlo a un servicio
    } else {
      console.log('Form is invalid');
    }
  }

  async onSubmitEdit() {
    this.reviewId = this.review?._id;
    if (this.reviewForm.valid) {
      const response = await this.reviewService.updateReview(this.reviewForm.value, this.reviewId)
      this.reviewUpdated.emit(response.message)
    } else {
      console.log('Form is invalid');
    }
  }
}

