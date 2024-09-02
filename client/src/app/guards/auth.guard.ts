import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../services/user.service';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const userService = inject(UserService);

  // Check if the user is logged in
  if (userService.isLogged()) {
    const expectedRole = route.data['role']; // Get the expected role from route data
    const isAdmin = userService.isAdmin();  // Determine if the user is an admin

    // Check if the user's role matches the expected role
    if ((expectedRole === 'admin' && isAdmin) || (expectedRole === 'user' && !isAdmin)) {
      return true; // Allow access if the role matches
    }

    // Redirect to forbidden page if the role does not match
    router.navigateByUrl('/forbidden');
    return false;
  } else {
    // Redirect to login if the user is not logged in
    router.navigateByUrl('/login');
    return false;
  }
};
