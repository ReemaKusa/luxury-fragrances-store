import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartItem } from '../../models/cart-item';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items: CartItem[] = [];
  total = 0;

  fullName = '';
  address = '';
  creditCard = '';

  constructor(
    private readonly cartService: CartService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.cartService.cartItems$.subscribe((items: CartItem[]) => {
      this.items = items;
      this.total = this.cartService.getCartTotal();
    });
  }

  updateQuantity(productId: number, value: number | string): void {
    const quantity = Number(value);
    if (quantity >= 1) {
      this.cartService.updateQuantity(productId, quantity);
      this.total = this.cartService.getCartTotal();
    }
  }

  removeItem(productId: number): void {
    this.cartService.removeItem(productId);
    this.total = this.cartService.getCartTotal();
  }

  submitOrder(): void {
    const finalTotal = this.total;

    if (
      this.fullName.trim().length < 3 ||
      this.address.trim().length < 5 ||
      this.creditCard.trim().length < 8
    ) {
      return;
    }

    this.cartService.clearCart();
    this.router.navigate(['/confirmation'], {
      queryParams: { name: this.fullName, total: finalTotal }
    });
  }
}
