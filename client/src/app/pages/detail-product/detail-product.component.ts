import { Product } from './../../interfaces/product.interface';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';


@Component({
  selector: 'detail-product',
  standalone: true,
  imports: [],
  templateUrl: './detail-product.component.html',
  styleUrl: './detail-product.component.css'
})
export class DetailProductComponent {

  /*  product: Product = new Product; */
  activatedRoute = inject(ActivatedRoute);
  productService = inject(ProductService);

  //Recuperar el id del producto cuando arranca el componente
  ngOnInit() {
    this.activatedRoute.params.subscribe(async params => {
      //params['productId']---> el id del empleado
      const response = await this.productService.getById(params['productId']);
      //this.product = response;

    });
  }

}






