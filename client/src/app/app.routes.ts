import { DetailRoutineComponent } from './pages/detail-routine/detail-routine.component';
/* import { DetailProductComponent } from './pages/detail-routine/detail-routine.component';*/
import { Routes } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { RoutinesComponent } from './pages/routines/routines.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductFormComponent } from './pages/product-form/product-form.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { authGuard } from './guards/auth.guard';
import { UsersComponent } from './pages/users/users.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { ReviewsComponent } from './pages/reviews/reviews.component';


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
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
    path: 'routines',
    component: RoutinesComponent
  },
  {
    path: 'routine/:id',
    component: DetailRoutineComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  /*   {
      path: 'product/:id',
      component: DetailProductComponent
    }, */
  {
    path: 'product/form',
    component: ProductFormComponent,
    canActivate: [authGuard],
    data: { role: 'admin' },
  },
  {
    path: 'reviews',
    component: ReviewsComponent
  },
  {
    path: 'users',
    component: UsersComponent,
    canActivate: [authGuard],
    data: { role: 'admin' },
  },
  {
    path: 'user/:id',
    component: UserProfileComponent,
    canActivate: [authGuard],
    data: { role: 'user' },
  },
  {
    path: '**',
    component: NotFoundComponent
  },
];
