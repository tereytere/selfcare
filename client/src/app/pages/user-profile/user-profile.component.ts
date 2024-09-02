import { Component, Input, ViewEncapsulation, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { User } from '../../interfaces/user.interface';
import { CardRoutineAllComponent } from "../../components/card-routine-all/card.component";
import { UserService } from '../../services/user.service';
import { Review } from '../../interfaces/review.inteface';
import { ReviewService } from '../../services/review.service';
import { CardReviewAllComponent } from "../../components/card-review-all/card.component";

@Component({
  selector: 'user-profile',
  standalone: true,
  imports: [CardModule, ButtonModule, CardRoutineAllComponent, CardReviewAllComponent],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css',
  encapsulation: ViewEncapsulation.None
})
export class UserProfileComponent {
  @Input() user: User | null = null;
  router = inject(Router);
  userService = inject(UserService);
  reviewService = inject(ReviewService);
  userId: string = "";

  userReviews: Review[] = [];

  constructor() { }

  ngOnInit() {
    this.initializeUser();
    this.loadUserReviews();
  }

  async initializeUser() {
    if (this.userService.isLogged()) {
      const token = this.userService.getToken();
      if (token) {
        try {
          const decodedToken = this.userService.decodeToken(token);
          this.userId = decodedToken.id;
          const response = await this.userService.getById(decodedToken.id);
          this.user = response.data;
        } catch (error) {
          console.error('Failed to decode token or fetch user:', error);
        }
      }
    }
  }

  async loadUserReviews() {
    try {
      const response = await this.userService.getReviewsForCurrentUser();
      this.userReviews = response;
    } catch (error) {
      console.error('Failed to fetch user reviews:', error);
    }
  }


  async onClickEdit() {
    // Edit user with userService.update()
  }

  async onClickDelete() {
    // Delete user with userService.deleteById(this.user.id)
  }

  async onReviewErased($event: string) {
    this.userReviews = [];
  }

  async onReviewEdited($event: string) {
    this.userReviews = [];
  }
}
