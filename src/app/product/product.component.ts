import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../shared/interface/product.interface';
import { ProductDescriptionComponent } from '../product-description/product-description.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, FormsModule, ProductDescriptionComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  @Input() product: any;

  isDescriptionExpanded = false;
  selectedProduct!: Product;
  showModal: boolean = false;
  
  // Toggle description visibility

  toggleDescription() {
    this.isDescriptionExpanded = !this.isDescriptionExpanded;
  }

  // Helper method to truncate description

  get truncatedDescription() {
    return this.product.description?.length > 50
      ? this.product.description.slice(0, 50) + '...'
      : this.product.description;
  }

  // Product description modal

  openModal(product: Product): void {
    this.selectedProduct = product;
    this.showModal = true;
  }
}
