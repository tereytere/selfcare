import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../services/user.service';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const userService = inject(UserService);

  // Check if the user is logged in
  if (userService.isLogged()) {
    const expectedRole = route.data['role']; // Get the expected role from route data

    // Check if the user is an admin
    if (expectedRole === 'admin' && userService.isAdmin()) {
      return true; // Allow access if the user is an admin
    }

    // Check if the user is a normal user
    if (expectedRole === 'user' && !userService.isAdmin()) {
      return true; // Allow access if the user is a normal user
    }

    // If the role does not match, redirect to a forbidden page or some other page
    router.navigateByUrl('/forbidden');
    return false;
  } else {
    router.navigateByUrl('/login');
    return false;
  }
};
