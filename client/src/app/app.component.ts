
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { RoutinesComponent } from './pages/routines/routines.component';
import { CardReviewAllComponent } from "./components/card-review-all/card.component";


@Component({
  selector: 'root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, RoutinesComponent, CardReviewAllComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'selfcare';
}
