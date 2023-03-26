import { Component, OnInit } from '@angular/core'
import { ProductService } from '../services/product/product.service';
import { Product } from '../shared/models/Product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products:Product[] = [];
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.products = this.productService.getAll();
  } 
}
