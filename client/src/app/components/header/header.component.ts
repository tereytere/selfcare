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
  token = localStorage.getItem('token');
  decodedToken = JSON.parse(atob(this.token!.split('.')[1]));
  userId = this.decodedToken.id;

  async onClickLogout() {
    localStorage.removeItem('token');
    this.router.navigateByUrl('/home');
  }

  async onClickLogin() {
    this.router.navigateByUrl('/login');
  }


}
