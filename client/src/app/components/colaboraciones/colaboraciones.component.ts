import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'colaboraciones',
  standalone: true,
  imports: [CarouselModule, CardModule],
  templateUrl: './colaboraciones.component.html',
  styleUrls: ['./colaboraciones.component.css']
})
export class ColaboracionesComponent {
  colaboraciones = [
    
    { 
      imgUrl: '/images/img_colaboraciones/Yves.png' 
    },
    { 
      imgUrl: '/images/img_colaboraciones/origins.avif' 
    },
    {
      imgUrl: '/images/img_colaboraciones/THE_ORDINARY.avif' 
    },
    {
      imgUrl: '/images/img_colaboraciones/esteLauder.png' 
    },
    {
      imgUrl: '/images/img_colaboraciones/nivea.png' 
    }

  ];

  responsiveOptions = [
    {
        breakpoint: '1024px',
        numVisible: 1,
        numScroll: 1
    },
    {
        breakpoint: '768px',
        numVisible: 1,
        numScroll: 1
    },
    {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
    }
  ];
}
