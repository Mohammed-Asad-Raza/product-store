import { Component, Input } from '@angular/core';
import { Product } from '../shared/interface/product.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-description',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-description.component.html',
  styleUrl: './product-description.component.scss'
})
export class ProductDescriptionComponent {
  @Input() product!: Product;
  @Input() showModal: boolean = false;

  // Method to close product description modal

  closeModal(): void {
    this.showModal = false;
  }
}
