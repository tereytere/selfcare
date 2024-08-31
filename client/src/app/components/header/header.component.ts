import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { UserService } from '../../services/user.service';
import { ButtonComponent } from "../button/button.component";
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'header-component',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, ButtonComponent, ButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  router = inject(Router);
  userService = inject(UserService);
  user: any = null;

  constructor() {
    this.initializeUser();
  }

  async initializeUser() {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decodedToken = JSON.parse(atob(token.split('.')[1]));
        this.user = await this.userService.getById(decodedToken.id);
      } catch (error) {
        console.error('Failed to decode token or fetch user:', error);
        this.onClickLogout();
      }
    }
  }

  async onClickLogout() {
    localStorage.removeItem('token');
    this.user = null;
    this.router.navigateByUrl('/home');
  }

  async onClickLogin() {
    this.router.navigateByUrl('/login');
  }

  async onClickUser() {
    if (this.user && this.user.id) {
      this.router.navigateByUrl(`/user/${this.user.id}`);
    } else {
      console.error('User ID is not available');
    }
  }

  isLoggedIn(): boolean {
    return !this.user;
  }
}
