import { Component, EventEmitter, Output, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Category, Product } from '../../interfaces/product.interface';
import { inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { JsonPipe } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';
import { InputLabelComponent } from '../../components/input-label/input-label.component';



@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [FormsModule, InputLabelComponent],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent {

  item = ""

  @Output() productCreated: EventEmitter<Product> = new EventEmitter();

  newProduct: Product = {
    name: '', brand: '', category: Category.Body, properties: '', shoplink: '', image: ''
  }

  onClick() {
    this.productCreated.emit(this.newProduct);
    this.newProduct = {
      name: '', brand: '', category: Category.Body, properties: '', shoplink: '', image: ''
    }
  }

  addItem(newItem: string) {
    //this.item = newItem;
    console.log(newItem);

  }



}