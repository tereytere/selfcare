import { DetailRoutineComponent } from './pages/detail-routine/detail-routine.component';
import { Routes } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';

export const routes: Routes = [
  {
    path: 'registro',
    component: RegisterComponent
  },
  { path: 'routine/:id', component: DetailRoutineComponent }

];
