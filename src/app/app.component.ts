import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  products = [
    {
      name: 'Smartphone',
      image: 'https://picsum.photos/200/300?random=1',
      price: 299.99,
      description:
        'A high-quality smartphone with a great camera and battery life.',
    },
    {
      name: 'Laptop',
      image: 'https://picsum.photos/200/300?random=2',
      price: 899.99,
      description: 'A powerful laptop perfect for gaming and productivity.',
    },
    {
      name: 'Headphones',
      image: 'https://picsum.photos/200/300?random=3',
      price: 89.99,
      description:
        'Noise-cancelling headphones for an immersive listening experience.',
    },
    {
      name: 'Smartwatch',
      image: 'https://picsum.photos/200/300?random=4',
      price: 199.99,
      description: 'A smartwatch with health tracking and notifications.',
    },
    {
      name: 'Camera',
      image: 'https://picsum.photos/200/300?random=5',
      price: 499.99,
      description: 'A high-resolution camera for professional photography.',
    },
    {
      name: 'Bluetooth Speaker',
      image: 'https://picsum.photos/200/300?random=6',
      price: 59.99,
      description: 'Portable Bluetooth speaker with excellent sound quality.',
    },
  ];

  addProduct(newProduct: {
    name: string;
    image: string;
    price: number;
    description: string;
  }) {
    this.products.push(newProduct);
  }
}
