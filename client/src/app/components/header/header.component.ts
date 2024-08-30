import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'header-component',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  router = inject(Router);
  usuariosService = inject(UserService);

  async onClickLogout() {
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login');
  }

}
