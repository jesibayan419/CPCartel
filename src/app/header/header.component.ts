import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../services/cart/cart.service';
import { ProductService } from '../services/product/product.service';
import { Cart } from '../shared/models/Cart'
import { CartItem } from '../shared/models/CartItem';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() visible:boolean = false;
  cart!:Cart;
  constructor(private cartService:CartService) { 
    this.setCart();
  }

  ngOnInit():void {
  }

  changeQuantity(cartItem:CartItem, quantityInString:string) {
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.product.id, quantity);
    this.setCart();
  }

  setCart(){
    this.cart = this.cartService.getCart();
  }
}
