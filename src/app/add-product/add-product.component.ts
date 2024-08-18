import { Component, EventEmitter, Output } from '@angular/core';
import { IProduct } from '../../models/product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss',
})
export class AddProductComponent {
  name: string = '';
  image: string = '';
  price: number = 0;
  description: string = '';

  @Output() productAdded = new EventEmitter<IProduct>();
  addProduct() {
    this.productAdded.emit({
      name: this.name ?? '',
      image: this.image ?? '',
      price: this.price ?? '',
      description: this.description ?? '',
    });
  }
}
