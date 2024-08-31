import { Component, Input, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
import { ReactiveFormsModule, FormControl } from '@angular/forms'
import { Review } from '../../interfaces/review.inteface';


//Lógica del componenete e incluyo la gestión de los datos de entrada y la navegacion al hacer el click en "Ver más"
@Component({
  selector: 'card-review-all',
  standalone: true,
  imports: [CardModule, ButtonModule, RatingModule, ReactiveFormsModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardReviewAllComponent implements OnInit {

  @Input() review: Review | null = null;

  starsControl: FormControl = new FormControl(0);

  router = inject(Router);

  ngOnInit() {
    if (this.review) {
      this.starsControl.setValue(this.review.stars);
    }
  }

  /*  onViewMore() {
    this.router.navigate(['/routine', this.routineId]);
   } */

}



