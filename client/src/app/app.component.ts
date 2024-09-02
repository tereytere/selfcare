
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { TestimoniosComponent } from './components/testimonios/testimonios.component.spec';
import { ColaboracionesComponent } from './components/colaboraciones/colaboraciones.component';

// import { LoginComponent } from "./pages/login/login.component";

@Component({
  selector: 'root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent,TestimoniosComponent,ColaboracionesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'selfcare';
}
