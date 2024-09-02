import { Component, Input, ViewEncapsulation, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { User } from '../../interfaces/user.interface';
import { CardReviewAllComponentEdit } from "../../components/card-review-all-button/card.component";
import { CardRoutineAllComponent } from "../../components/card-routine-all/card.component";
import { UserService } from '../../services/user.service';

@Component({
  selector: 'user-profile',
  standalone: true,
  imports: [CardModule, ButtonModule, CardReviewAllComponentEdit, CardRoutineAllComponent],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css',
  encapsulation: ViewEncapsulation.None
})
export class UserProfileComponent {
  @Input() user: User | null = null;
  router = inject(Router);
  userService = inject(UserService);

  constructor() { }

  ngOnInit() {
    this.initializeUser();
  }

  async initializeUser() {
    if (this.userService.isLogged()) {
      const token = this.userService.getToken();
      if (token) {
        try {
          const decodedToken = this.userService.decodeToken(token);
          const response = await this.userService.getById(decodedToken.id);
          this.user = response.data;
        } catch (error) {
          console.error('Failed to decode token or fetch user:', error);
        }
      }
    }
  }

  async onClickEdit() {
    // Edit user with userService.update()
  }

  async onClickDelete() {
    // Delete user with userService.deleteById(this.user.id)
  }
}
