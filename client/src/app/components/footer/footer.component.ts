import { Component, ViewEncapsulation } from '@angular/core';
import { FloatLabelModule } from 'primeng/floatlabel';

@Component({
  selector: 'footer-component',
  standalone: true,
  imports: [FloatLabelModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
  encapsulation: ViewEncapsulation.None
})
export class FooterComponent {

}
