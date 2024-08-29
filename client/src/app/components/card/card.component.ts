import { Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

//Lógica del componenete e incluyo la gestión de los datos de entrada y la navegacion al hacer el click en "Ver más"
@Component({
  selector: 'card',
  standalone: true,
  imports: [CardModule, ButtonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  @Input() name: string = '';
  @Input() category: string = '';
  @Input() imagenUrl: string = '';
  @Input() description: string = '';
  @Input() routineId: string = '';

  router = inject(Router);

  onViewMore() {
    this.router.navigate(['/routine', this.routineId]);
  }

}


