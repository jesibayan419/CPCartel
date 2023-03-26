import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getAll():String[]{
    return [
      '/assets/images/products/iphone.jpg',
      '/assets/images/products/samsung.jpg',
      '/assets/images/products/xiaomi.jpg',
      '/assets/images/products/honor.jpg',
      '/assets/images/products/oneplus.jpg',
      '/assets/images/products/oppo.jpg',
      '/assets/images/products/realme.jpg',
      '/assets/images/products/rog.jpg',
      '/assets/images/products/zte.jpg',
      '/assets/images/products/vivo.jpg',
    ]
  }
}
