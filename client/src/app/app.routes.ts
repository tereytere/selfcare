import { DetailRoutineComponent } from './pages/detail-routine/detail-routine.component';
import { Routes } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
<<<<<<< HEAD

export const routes: Routes = [
  {
    path: 'registro',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },


=======
import { HomeComponent } from './pages/home/home.component';
import { RoutinesComponent } from './pages/routines/routines.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductFormComponent } from './pages/product-form/product-form.component';

export const routes: Routes = [
  { path: 'registro', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'routines', component: RoutinesComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'routine/:id', component: DetailRoutineComponent },
  { path: 'product/form', component: ProductFormComponent },
>>>>>>> 65aee31145e30edd60d115ab57a0852917d5a734
];
