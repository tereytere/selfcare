import { Routine } from './../../interfaces/routine.interface';
import { Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';


//Lógica del componenete e incluyo la gestión de los datos de entrada y la navegacion al hacer el click en "Ver más"
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

  /*  onViewMore() {
     this.router.navigate(['/routine', this.routineId]);
   } */

}


