import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { RatingModule } from 'primeng/rating';
import { ButtonModule } from 'primeng/button';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from "../button/button.component";

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
  reviewForm: FormGroup;

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

  onSubmit() {
    if (this.reviewForm.valid) {
      console.log('Form Submitted', this.reviewForm.value);
      // Maneja el envío del formulario, como, enviarlo a un servicio
    } else {
      console.log('Form is invalid');
    }
  }
}

