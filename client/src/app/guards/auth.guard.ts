import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../services/user.service';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const userService = inject(UserService);

  // Check if the user is logged in
  if (userService.isLogged()) {
    const expectedRoles = route.data['role']; // Get the expected roles from route data
    const isAdmin = userService.isAdmin();  // Determine if the user is an admin

    // Convert expectedRoles to an array if it's not already
    const roles = Array.isArray(expectedRoles) ? expectedRoles : [expectedRoles];

    // Check if the user's role matches one of the expected roles
    if ((roles.includes('admin') && isAdmin) || (roles.includes('user') && !isAdmin)) {
      return true; // Allow access if one of the roles matches
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
