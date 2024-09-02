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
import { Routine } from '../../interfaces/routine.interface';
import { RoutineService } from '../../services/routine.service';
import { FloatLabelModule } from 'primeng/floatlabel';
import { CITY_COORDINATES } from '../../data/city-coordinates';
import { ButtonComponent } from '../../components/button/button.component';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import Swal from 'sweetalert2';

@Component({
  selector: 'user-profile',
  standalone: true,
  imports: [CardModule, ButtonModule, CardRoutineAllComponent, CardReviewAllComponent, FloatLabelModule, ButtonComponent, FormsModule, ReactiveFormsModule, InputTextModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css',
  encapsulation: ViewEncapsulation.None
})
export class UserProfileComponent {
  @Input() user: User | null = null;
  router = inject(Router);
  userService = inject(UserService);
  reviewService = inject(ReviewService);
  routineService = inject(RoutineService);
  userId: string = "";
  routines: Routine[] = [];

  userReviews: Review[] = [];

  isEdit: boolean = false;
  cities: string[] = [];

  constructor() { }

  ngOnInit() {
    this.initializeUser();
    this.loadUserReviews();
    this.loadCities();
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
          if (this.user?.routines) {
            // Use a type assertion to specify that routines are of type (string | { _id: string })[]
            const routinesWithNulls = await Promise.all(
              (this.user.routines as (string | { _id: string })[]).map(async (routineId) => {
                // Check if routineId is an object with an _id field
                if (typeof routineId === 'object' && routineId !== null && '_id' in routineId) {
                  routineId = (routineId as { _id: string })._id;
                }

                if (typeof routineId === 'string') { // Ensure routineId is a string
                  const routineResponse = await this.routineService.getById(routineId);
                  return routineResponse.data;
                } else {
                  console.error('Routine ID is not a string or valid object:', routineId);
                  return null; // Handle invalid ID case
                }
              })
            );
            // Filter out null values
            this.routines = routinesWithNulls.filter((routine): routine is Routine => routine !== null);
          }
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

  loadCities(): void {
    this.cities = Object.keys(CITY_COORDINATES);
  }

  formulario: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    location: new FormControl('', Validators.required),
    about: new FormControl('')
  })
  errores: { message: string }[] = [];

  async onClickEdit() {
    this.isEdit = true;
    // Edit user with userService.update()
  }
  async onSubmit() {
    try {
      const response = await this.userService.update(this.userId, this.formulario.value);
      this.initializeUser();
      this.isEdit = false;
    }
    catch {

    }
  }
  cancelEdit() {
    this.isEdit = false;
  }

  async onClickDelete() {
    // Delete user with userService.deleteById(this.user.id)
    try {


      const result = await Swal.fire({
        title: 'Borar usuario',
        text: 'Esta acción es irreversible. Estás segura/o?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Sí, borralo'
      });

      if (result.isConfirmed) {
        this.userService.deleteById(this.userId);
        Swal.fire('Borrado', 'Se ha borrado correctamente', 'success');
        this.userService.setToken('');
        this.router.navigateByUrl('/home');
      }
    }

    catch {

    }
  }

  async onReviewErased($event: string) {
    this.userReviews = [];
  }

  async onReviewEdited($event: string) {
    this.userReviews = [];
  }
}
