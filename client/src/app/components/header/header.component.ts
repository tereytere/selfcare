import { Component, inject, OnInit, ViewEncapsulation } from '@angular/core';
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
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  router = inject(Router);
  userService = inject(UserService);
  user: any = null;

  constructor() { }

  ngOnInit() {
    this.initializeUser();
  }

  async initializeUser() {
    console.log('Initializing user...');
    if (this.userService.isLogged()) {
      try {
        const token = this.userService.getToken();
        const decodedToken = this.userService.decodeToken(token!);
        console.log('Decoded Token:', decodedToken);
        const response = await this.userService.getById(decodedToken.id);
        this.user = response.data;
        console.log('Fetched User:', this.user);
      } catch (error) {
        console.error('Failed to decode token or fetch user:', error);
        this.onClickLogout();
      }
    }
  }

  async onClickLogout() {
    this.userService.setToken('');
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
    return this.userService.isLogged();
  }
}
