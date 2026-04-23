import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product!: Product;
  @Output() added = new EventEmitter<{ product: Product; quantity: number }>();

  quantity = 1;

  onQuantityChange(value: number | string): void {
    this.quantity = Number(value);
    if (this.quantity < 1 || Number.isNaN(this.quantity)) {
      this.quantity = 1;
    }
  }

  addToCart(): void {
    this.added.emit({
      product: this.product,
      quantity: this.quantity
    });
    this.quantity = 1;
  }
}
