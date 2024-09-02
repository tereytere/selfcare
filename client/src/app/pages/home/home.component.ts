import { Component } from '@angular/core';
import { MapComponent } from '../../components/map/map.component';
import { CarouselRoutine } from "../../components/carousel-routine/carousel.component";
import { FooterComponent } from '../../components/footer/footer.component';
import { CarouselProductComponent } from '../../components/carousel-product/carousel-product.component';
import { TestimoniosComponent } from "../../components/testimonios/testimonios.component";
import { ColaboracionesComponent } from "../../components/colaboraciones/colaboraciones.component";


@Component({
  selector: 'home',
  standalone: true,
  imports: [MapComponent, CarouselRoutine, FooterComponent, CarouselProductComponent, TestimoniosComponent, ColaboracionesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
