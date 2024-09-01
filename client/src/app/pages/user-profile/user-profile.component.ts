import { Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { User } from '../../interfaces/user.interface';
import { CardReviewAllComponent } from "../../components/card-review-all-button/card.component";
import { CardRoutineAllComponent } from "../../components/card-routine-all/card.component";
import { UserService } from '../../services/user.service';

@Component({
  selector: 'user-profile',
  standalone: true,
  imports: [CardModule, ButtonModule, CardReviewAllComponent, CardRoutineAllComponent],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
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
    console.log('Initializing user...');
    if (this.userService.isLogged()) {
      const token = this.userService.getToken();
      if (token) {
        try {
          const decodedToken = this.userService.decodeToken(token);
          console.log('Decoded Token:', decodedToken);
          const response = await this.userService.getById(decodedToken.id);
          this.user = response.data;
          console.log('Fetched User:', this.user);
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
