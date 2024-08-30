import { Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { DatePipe } from '@angular/common';
import { User } from '../../interfaces/user.interface';


//Lógica del componenete e incluyo la gestión de los datos de entrada y la navegacion al hacer el click en "Ver más"
@Component({
  selector: 'card-user-all',
  standalone: true,
  imports: [CardModule, ButtonModule, DatePipe],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardUserAllComponent {

  @Input() user: User | null = null;




  router = inject(Router);

  /*  onViewMore() {
     this.router.navigate(['/routine', this.routineId]);
   } */

}


