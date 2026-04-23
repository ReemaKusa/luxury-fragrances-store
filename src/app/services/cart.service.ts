import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from '../models/cart-item';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: CartItem[] = [];
  private readonly cartItemsSubject = new BehaviorSubject<CartItem[]>([]);
  readonly cartItems$ = this.cartItemsSubject.asObservable();

  getItems(): CartItem[] {
    return [...this.items];
  }

  addToCart(product: Product, quantity: number): void {
    const existingItem = this.items.find((item) => item.product.id === product.id);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.items.push({ product, quantity });
    }

    this.cartItemsSubject.next([...this.items]);
  }

  updateQuantity(productId: number, quantity: number): void {
    const item = this.items.find((entry) => entry.product.id === productId);

    if (!item) {
      return;
    }

    item.quantity = quantity;

    if (item.quantity <= 0) {
      this.removeItem(productId);
      return;
    }

    this.cartItemsSubject.next([...this.items]);
  }

  removeItem(productId: number): void {
    this.items = this.items.filter((item) => item.product.id !== productId);
    this.cartItemsSubject.next([...this.items]);
  }

  clearCart(): void {
    this.items = [];
    this.cartItemsSubject.next([]);
  }

  getCartCount(): number {
    return this.items.reduce((total, item) => total + item.quantity, 0);
  }

  getCartTotal(): number {
    return this.items.reduce((total, item) => total + item.product.price * item.quantity, 0);
  }
}
