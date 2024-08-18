import { Component, Input } from '@angular/core';
import { IProduct } from '../../models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  @Input() product!: IProduct | undefined; // undifined is added to avoid error if you have any comment pls let me know
}
