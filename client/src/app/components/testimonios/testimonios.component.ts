import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'testimonios',
  standalone: true,
  imports: [CarouselModule, CardModule],
  templateUrl: './testimonios.component.html',
  styleUrls: ['./testimonios.component.css']
})
export class TestimoniosComponent {
  testimonios = [
    {
      nombre: 'Ana Martínez',
      imgUrl: '/images/img_testimonios/AnaMartínez.webp',
      opinion: '"He estado utilizando la aplicación Selfcare durante los últimos seis meses y realmente he notado una gran diferencia en mi rutina de belleza. Los consejos personalizados y las recomendaciones de productos han transformado mi piel y mi confianza.'
    },
    {
      nombre: 'Laura Gómez',
      imgUrl: '/images/img_testimonios/LauraGomez.jpg',
      opinion: 'Desde que empecé a usar Selfcare, mi rutina de autocuidado ha mejorado notablemente. Los planes personalizados me han ayudado a encontrar los productos adecuados para mi tipo de piel. ¡Me siento más relajada y mi piel se ve increíble!'
    },
    {
      nombre: 'Pedro Ruiz',
      imgUrl: '/images/img_testimonios/PedroRuiz.jpg',
      opinion: 'Los consejos de Selfcare sobre bienestar y ejercicio me han dado una nueva perspectiva. He integrado el yoga y la meditación en mi rutina diaria y me siento más enérgico y equilibrado. ¡Recomiendo la app a todos mis amigos!'
    },
    {
      nombre: 'Mariana López',
      imgUrl: '/images/img_testimonios/MarianaLopez.jpg',
      opinion: 'Selfcare ha sido una revelación para mí. La función de seguimiento de hidratación ha mejorado mi salud de la piel de manera significativa. Los recordatorios y las sugerencias de productos realmente marcan la diferencia.'
    },
    {
      nombre: 'Carlos Fernández',
      imgUrl: '/images/img_testimonios/CarlosFernandez.webp',
      opinion: 'No sabía cuánto necesitaba una rutina de autocuidado hasta que descubrí Selfcare. Los consejos sobre cuidado del cabello y la piel han transformado mi apariencia y mi bienestar general. ¡Es una app fantástica!'
    },
    {
      nombre: 'Valeria Torres',
      imgUrl: '/images/img_testimonios/ValeriaTorres.jpg',
      opinion: 'Gracias a Selfcare, he aprendido a cuidar mi piel de manera más efectiva. Los tutoriales y recomendaciones son fáciles de seguir y los resultados han sido sorprendentes. ¡Mi piel nunca ha estado tan radiante!'
    },
    {
      nombre: 'Javier Martínez',
      imgUrl: '/images/img_testimonios/JavierMartinez.jpg',
      opinion: 'La aplicación Selfcare me ha ayudado a establecer una rutina de cuidado personal que se ajusta a mi estilo de vida. Los informes detallados sobre mi progreso me mantienen motivado. ¡Estoy muy satisfecho con los resultados!'
    },
    {
      nombre: 'Isabel Pérez',
      imgUrl: '/images/img_testimonios/IsabelPerez.jpg',
      opinion: 'Selfcare ha hecho maravillas por mi rutina de belleza. Los recordatorios y las sugerencias personalizadas me han ayudado a mantenerme al tanto de mis cuidados y mi piel se ve increíble. ¡No puedo estar más feliz!'
    },
    {
      nombre: 'Manuel Ortega',
      imgUrl: '/images/img_testimonios/ManuelOrtega.jpg',
      opinion: 'Nunca pensé que una app pudiera tener un impacto tan positivo en mi bienestar. Selfcare ha mejorado mi salud mental y física con sus consejos de autocuidado y bienestar. ¡Es una herramienta invaluable!'
    },
    {
      nombre: 'Sofía Sánchez',
      imgUrl: '/images/img_testimonios/SofiaSanchez.jpg',
      opinion: 'La funcionalidad de seguimiento de hábitos de Selfcare me ha ayudado a mantenerme en el camino correcto. He visto grandes mejoras en mi piel y en mi energía diaria. ¡Es una app imprescindible para mí!'
    },
    {
      nombre: 'Fernando González',
      imgUrl: '/images/img_testimonios/PedroRuiz.jpg',
      opinion: 'He estado usando Selfcare para mi rutina de cuidado de la piel y el impacto ha sido increíble. Los productos recomendados se ajustan perfectamente a mis necesidades y mi piel nunca se ha visto mejor.'
    }
  ];

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
