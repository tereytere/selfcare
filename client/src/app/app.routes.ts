import { DetailRoutineComponent } from './pages/detail-routine/detail-routine.component';
import { Routes } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { DetailProductComponent } from './pages/detail-product/detail-product.component';
import { ProductFormComponent } from './pages/product-form/product-form.component';

export const routes: Routes = [
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

  //OJO este formulario solo puede verlo admin, ahora está en modo probar
  {
    path: 'formproduct',
    component: ProductFormComponent
  },


  { path: 'routine/:id', component: DetailRoutineComponent },

  { path: 'product/:id', component: DetailProductComponent }

];
