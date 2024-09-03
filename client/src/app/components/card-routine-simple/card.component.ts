import { Routine } from './../../interfaces/routine.interface';
import { Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'card-routine-simple',
  standalone: true,
  imports: [CardModule, ButtonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardRoutineSimpleComponent {

  @Input() routine: Routine | null = null;

  router = inject(Router);
  onClickCard(): void {
    if (this.routine) {
      this.router.navigate([`/routine/${this.routine._id}`]);
    }
  }

}


