import { RoutineService } from './../../services/routine.service';
import { Routine } from './../../interfaces/routine.interface';
import { Component, Input, OnInit, ViewEncapsulation, inject } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { CardModule } from 'primeng/card';
import { CardRoutineAllComponent } from '../card-routine-all/card.component';


@Component({
  selector: 'carousel-routine',
  standalone: true,
  imports: [CarouselModule, ButtonModule, TagModule, CardModule, CardRoutineAllComponent],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css',
  encapsulation: ViewEncapsulation.None
})
export class CarouselRoutine implements OnInit {
  routines: Routine[] = [];
  @Input() routine: Routine | null = null;
  private routineService = inject(RoutineService)

  async ngOnInit() {
    try {
      this.routines = await this.routineService.getAll(1, 3);
    } catch (error) {
      console.error('Error loading routines:', error);
    }
  }

}
