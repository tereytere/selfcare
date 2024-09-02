
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { RoutineFormComponent } from "./pages/routine-form/routine-form.component";
import { CarouselComponent } from './components/carousel-routine/carousel.component';


@Component({
  selector: 'root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, RoutineFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'selfcare';
}
