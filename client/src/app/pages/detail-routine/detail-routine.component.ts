import { RoutineService } from './../../services/routine.service';
import { Component, inject } from '@angular/core';
import { Routine } from '../../interfaces/routine.interface';

@Component({
  selector: 'app-detail-routine',
  standalone: true,
  imports: [],
  templateUrl: './detail-routine.component.html',
  styleUrl: './detail-routine.component.css'
})
export class DetailRoutineComponent {
  routineService = inject(RoutineService);


}
