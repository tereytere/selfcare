import { Component, inject, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { UserService } from '../../services/user.service';
import { ButtonComponent } from "../button/button.component";
import { ButtonModule } from 'primeng/button';
import { Subscription } from 'rxjs';

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

  private userSubscription: Subscription;

  constructor() {
    this.userSubscription = this.userService.user$.subscribe(user => {
      this.user = user;
    });
  }

  ngOnInit() {
    if (this.userService.isLogged()) {
      this.userService.fetchAndSetUser();
    }
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

  async onClickLogout() {
    this.userService.setToken('');
    this.router.navigateByUrl('/home');
  }

  onClickLogin() {
    this.router.navigateByUrl('/login');
  }

  onClickHome() {
    this.router.navigateByUrl('/home');
  }

  async onClickUser() {
    if (this.user && this.user._id) {
      this.router.navigateByUrl(`/user/${this.user._id}`);
    } else {
      console.error('User ID is not available');
    }
  }

  isLoggedIn(): boolean {
    return this.userService.isLogged();
  }
}
