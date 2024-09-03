import { Component, inject, ViewEncapsulation } from '@angular/core';
import { RoutineService } from './../../services/routine.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Routine } from './../../interfaces/routine.interface';
import { DividerModule } from 'primeng/divider';
import { ListboxModule } from 'primeng/listbox';
import { Product } from '../../interfaces/product.interface';
import { ProductService } from '../../services/product.service';
import { TableModule } from 'primeng/table';
import { ReviewService } from '../../services/review.service';
import { Review } from '../../interfaces/review.inteface';
import { CardModule } from 'primeng/card';
import { CardReviewAllComponent } from '../../components/card-review-all/card.component';
import { UserService } from '../../services/user.service';
import { CardReviewAllComponentEdit } from '../../components/card-review-all-button/card.component';
import { ReviewFormComponent } from '../../components/review-form/review-form.component';
import { ButtonComponent } from "../../components/button/button.component";
import Swal from 'sweetalert2';



@Component({
  selector: 'detail-routine',
  standalone: true,
  imports: [DividerModule, ListboxModule, TableModule, CardModule, CardReviewAllComponent, CardReviewAllComponentEdit, ReviewFormComponent, ButtonComponent],
  templateUrl: './detail-routine.component.html',
  styleUrl: './detail-routine.component.css',
  encapsulation: ViewEncapsulation.None
})
export class DetailRoutineComponent {
  router = inject(Router);
  selectedProduct!: Product;

  routineService = inject(RoutineService);
  productService = inject(ProductService);
  reviewService = inject(ReviewService);
  activatedRoute = inject(ActivatedRoute);
  userService = inject(UserService)


  routine: Routine | null = null;
  routineProducts: Product[] = [];
  routineReviews: Review[] = [];
  userId: string = "";

  isForm: boolean = false;

  showFormLabel: string = "Opina sobre esta rutina";
  isSavedLabel: string = "Guardar rutina";

  ngOnInit() {
    this.loadPage();
  }

  async loadPage() {
    this.activatedRoute.params.subscribe(async params => {
      const response = await this.routineService.getById(params['id']);
      this.routine = response.data;
      if (this.routine.products.length > 0) {
        this.routine.products.forEach(async product => {
          const responseProducts = await this.productService.getById(product);
          this.routineProducts.push(responseProducts.data);
        });
      }
      if (this.routine.reviews) {
        this.routine.reviews.forEach(async review => {
          const responseReviews = await this.reviewService.getById(review);
          this.routineReviews.push(responseReviews.data);
        });
      }
    })

    if (this.userService.isLogged()) {
      const token = this.userService.getToken();
      if (token) {
        try {
          const decodedToken = this.userService.decodeToken(token);
          this.userId = decodedToken.id;
        } catch (error) {
          console.error('Failed to decode token or fetch user:', error);
        }
      }
    }
  }

  async saveRoutine() {
    const response = await this.userService.addRoutineToUser(this.userId, this.routine!._id);
    console.log(response.message);
    await Swal.fire({
      title: 'Rutina guardada correctamente',
      text: 'Se ha creado la rutina! Puedes verla en tu perfil ahora',
      icon: 'success'
    });
    this.isSavedLabel = "Rutina ya guardada"
  }

  async onReviewPosted($event: string) {
    this.routineReviews = [];
    this.routineProducts = [];
    this.loadPage();
    this.toggleForm();
  }

  async onReviewErased($event: string) {
    this.routineReviews = [];
    this.routineProducts = [];
    this.loadPage();
  }

  async onReviewEdited($event: string) {
    this.routineReviews = [];
    this.routineProducts = [];
    this.loadPage();
  }
  toggleForm() {
    this.isForm = !this.isForm;
    this.showFormLabel === "Opina sobre esta rutina" ? this.showFormLabel = "Cancelar" : this.showFormLabel = "Opina sobre esta rutina";
  }
  onRowSelect(event: any) {
    this.router.navigateByUrl(`/product/${event.data._id}`);
  }
  redirectLogin() {
    this.router.navigateByUrl(`/login`);
  }
}
