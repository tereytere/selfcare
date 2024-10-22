import { Component, OnInit, inject } from '@angular/core';
import { Routine } from '../../interfaces/routine.interface';
import { RoutineService } from '../../services/routine.service';
import { PaginatorModule } from 'primeng/paginator';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CardRoutineAllComponent } from '../../components/card-routine-all/card.component';


@Component({
  selector: 'routines',
  standalone: true,
  imports: [PaginatorModule, TableModule, InputTextModule, ButtonModule, CardRoutineAllComponent],
  templateUrl: './routines.component.html',
  styleUrl: './routines.component.css'
})
export class RoutinesComponent implements OnInit {
  routines: Routine[] = [];
  currentPage: number = 1;
  totalPages: number = 2;
  itemsPerPage: number = 10;

  private routineService = inject(RoutineService);

  ngOnInit(): void {
    this.loadRoutines(this.currentPage);
  }

  async loadRoutines(page: number): Promise<void> {
    try {
      const response = await this.routineService.getAll(page, this.itemsPerPage);
      this.routines = response.data;
      //this.totalPages = Math.ceil(response.totalRecords / this.itemsPerPage);
    } catch (error) {
      console.error('Error fetching routines', error);
    }
  }

  onPageChange(event: any): void {
    //this.currentPage += 1;
    console.log(event);

    // console.log(this.currentPage);

    this.loadRoutines(event.page + 1);
  }


}
