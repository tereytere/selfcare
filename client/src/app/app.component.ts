import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { InputLabelComponent } from './components/input-label/input-label.component';
import { DetailProductComponent } from './pages/detail-product/detail-product.component';
import { DetailRoutineComponent } from "./pages/detail-routine/detail-routine.component";
import { ProductFormComponent } from './pages/product-form/product-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, InputLabelComponent, DetailProductComponent, ProductFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'selfcare';
}
