import { Injectable } from '@angular/core';
import { Product } from '../../shared/models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProductById(id: number): Product {
    return this.getAll().find(product => product.id == id)!;
  }

  getAll():Product[]{
    return [
      {
        id: 1,
        name: 'Apple Phone (iPhone)',
        price: 89990,
        specifications: '6.6-inch Full HD+, Exynos 850, 128GB, 5000mAh',
        image: '/assets/images/products/iphone.jpg',
        tags: ['apple', 'IOS', 'iphone'],
        stars: 4.5,
      },
      {
        id: 2,
        name: 'Samsung Phone',
        price: 79990,
        specifications: ' 6.7-inch Full HD+, MTK Helio G88, 128GB',
        image: '/assets/images/products/samsung.jpg',
        tags: ['samsung', 'Android'],
        stars: 4.8,
      },
      {
        id: 3,
        name: 'Xiaomi Phone',
        price: 25990,
        specifications: '6.6-inch Full HD+, Exynos 850, 128GB, 5000mAh',
        image: '/assets/images/products/xiaomi.jpg',
        tags: ['xiaomi', 'MIUI'],
        stars: 5,
      },
      {
        id: 4,
        name: 'Oppo Phone',
        price: 20990,
        specifications: '6.43-inch Full HD+, Snapdragon 680, 128GB',
        image: '/assets/images/products/oppo.jpg',
        tags: ['oppo', 'ColorOS'],
        stars: 4.3,
      },
      {
        id: 5,
        name: 'Vivo Phone',
        price: 20990,
        specifications: '6.8-inch Full HD+, SD 8 Gen 2, 512GB, 5000mA',
        image: '/assets/images/products/vivo.jpg',
        tags: ['vivo', 'OriginOS'],
        stars: 4.3,
      },
      {
        id: 6,
        name: 'Realme Phone',
        price: 19990,
        specifications: '6.4-inch Full HD+, Helio G99, 128GB, 5000mAh',
        image: '/assets/images/products/realme.jpg',
        tags: ['realme', 'Android'],
        stars: 4.1,
      },
      {
        id: 7,
        name: 'OnePlus Phone',
        price: 39990,
        specifications: '6.8-inch Full HD+, SD 8 Gen 2, 512GB, 5000mA',
        image: '/assets/images/products/oneplus.jpg',
        tags: ['oneplus', 'OxygenOS'],
        stars: 4.7,
      },
      {
        id: 8,
        name: 'ROG Phone',
        price: 49990,
        specifications: '6.8-inch Full HD+, SD 8 Gen 2, 512GB, 5000mA',
        image: '/assets/images/products/rog.jpg',
        tags: ['rog', 'ROG UI'],
        stars: 4.9,
      },
      {
        id: 9,
        name: 'ZTE Phone',
        price: 29990,
        specifications: '6.8-inch Full HD+, SD 8 Gen 2, 512GB, 5000mA',
        image: '/assets/images/products/zte.jpg',
        tags: ['zte', 'Redmagic OS', 'nubia', 'redmagic'],
        stars: 5,
      },
      {
        id: 10,
        name: 'HONOR Phone',
        price: 15990,
        specifications: '6.8-inch Full HD+, SD 8 Gen 2, 512GB, 5000mA',
        image: '/assets/images/products/honor.jpg',
        tags: ['honor', 'HarmonyOS', 'HMOS'],
        stars: 4.2,
      }
    ]
  }
}
