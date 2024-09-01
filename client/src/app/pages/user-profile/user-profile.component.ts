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

  private userService = inject(UserService);



  async onClickEdit() {
    //edit user with userService.update()
  }

  async onClickDelete() {
    //delete user with userService.deleteById(this.user.id)
  }

}
