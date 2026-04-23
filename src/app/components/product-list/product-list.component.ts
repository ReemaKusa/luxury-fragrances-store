import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  
  products: Product[] = [];
  message = '';


  constructor(
    private readonly productService: ProductService,
    private readonly cartService: CartService
  ) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data: Product[]) => {
      this.products = data;
        });
  }

  handleAddToCart(event: { product: Product; quantity: number }): void {
    this.cartService.addToCart(event.product, event.quantity);
    this.message = `${event.product.name} added to cart successfully!`;

    setTimeout(() => {
      this.message = '';
    }, 2000);
  }


}
