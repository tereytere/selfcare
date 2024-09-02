import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'carousel-routine',
  standalone: true,
  imports: [CarouselModule, CardModule],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselRoutine {
  routines = [
    { 
      name: 'Rutina de Cuidado Facial', 
      category: 'face', 
      description: 'Una rutina completa para el cuidado facial que te ayudará a mantener una piel radiante y saludable.'
    },
    { 
      name: 'Rutina de Hidratación Corporal', 
      category: 'body', 
      description: 'Una rutina ideal para mantener tu piel hidratada y nutrida durante todo el día.'
    },
    { 
      name: 'Rutina de Cuidado del Cabello', 
      category: 'hair', 
      description: 'Consejos y productos para mantener tu cabello sano, fuerte y brillante.'
    },
    { 
      name: 'Rutina de Cuidado de Manos', 
      category: 'hands', 
      description: 'Una rutina efectiva para mantener tus manos suaves y bien cuidadas.'
    },
    { 
      name: 'Rutina de Cuidado de Pies', 
      category: 'feet', 
      description: 'Cuida y mima tus pies con esta rutina especial para mantenerlos en perfectas condiciones.'
    }
  ].map(routine => ({
    ...routine,
    imageUrl: `/images/${routine.category}-selfcare.jpg` // Construye la URL de la imagen
  }));

  responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 3
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 2
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1
    }
  ];
}
