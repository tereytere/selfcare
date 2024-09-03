import { RoutineService } from './../../services/routine.service';
import { Routine } from './../../interfaces/routine.interface';
import { Component, Input, OnInit, ViewEncapsulation, inject } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { CardModule } from 'primeng/card';
import { CardRoutineAllComponent } from '../card-routine-all/card.component';
import { CardRoutineSimpleComponent } from "../card-routine-simple/card.component";


@Component({
  selector: 'carousel-routine',
  standalone: true,
  imports: [CarouselModule, ButtonModule, TagModule, CardModule, CardRoutineAllComponent, CardRoutineSimpleComponent],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css',
  encapsulation: ViewEncapsulation.None
})
export class CarouselRoutine implements OnInit {
  routines: Routine[] = [];
  routineService = inject(RoutineService);
  currentPage: number = 1;
  totalPages: number = 1;
  itemsPerPage: number = 10;


  constructor() { }

  ngOnInit(): void {
    this.loadRoutines(this.currentPage);

  }

  async loadRoutines(page: number): Promise<void> {
    try {
      const response = await this.routineService.getAll(page, this.itemsPerPage);
      this.routines = response.data;
      this.totalPages = Math.ceil(response.totalRoutines / this.itemsPerPage);
    } catch (error) {
      console.error('Error fetching routines', error);
    };
  }
}
