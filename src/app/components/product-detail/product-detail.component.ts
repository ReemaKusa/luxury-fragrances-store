import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product?: Product;
  quantity = 1;
  message = '';

  constructor(
    private readonly route: ActivatedRoute,
    private readonly productService: ProductService,
    private readonly cartService: CartService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.productService.getProducts().subscribe((products: Product[]) => {
      this.product = products.find((item) => item.id === id);
    });
  }

  onQuantityChange(value: number | string): void {
    this.quantity = Number(value);
    if (this.quantity < 1 || Number.isNaN(this.quantity)) {
      this.quantity = 1;
    }
  }

  addToCart(): void {
    if (!this.product) {
      return;
    }

    this.cartService.addToCart(this.product, this.quantity);
    this.message = `${this.product.name} added to cart!`;

    setTimeout(() => {
      this.message = '';
    }, 2000);
  }
}
