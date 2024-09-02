import { Component } from '@angular/core';
import { MapComponent } from '../../components/map/map.component';
import { CarouselRoutine } from "../../components/carousel-routine/carousel.component";
import { CarouselProduct } from '../../components/carousel-product/carousel-product.component';



@Component({
  selector: 'home',
  standalone: true,
  imports: [MapComponent, CarouselRoutine,CarouselProduct],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
