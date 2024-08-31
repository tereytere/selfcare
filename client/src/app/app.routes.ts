import { DetailRoutineComponent } from './pages/detail-routine/detail-routine.component';
import { Routes } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { RoutinesComponent } from './pages/routines/routines.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductFormComponent } from './pages/product-form/product-form.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { authGuard } from './guards/auth.guard';


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'registro',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'routines',
    component: RoutinesComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'product/form',
    component: ProductFormComponent,
    canActivate: [authGuard],
    data: { role: 'admin' },
  },
  {
    path: 'user/:id',
    component: ProductFormComponent,
    canActivate: [authGuard],
    data: { role: 'user' },
  },
  {
    path: 'routine/:id',
    component: DetailRoutineComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  },
];
