import { Component } from '@angular/core';
import { MapComponent } from '../../components/map/map.component';
import { CarouselRoutine } from "../../components/carousel-routine/carousel.component";

@Component({
  selector: 'home',
  standalone: true,
  imports: [MapComponent, CarouselRoutine],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
