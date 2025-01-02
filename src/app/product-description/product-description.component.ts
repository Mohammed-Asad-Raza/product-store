import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Input() product: Product | null = null;
  @Input() showModal: boolean = false;
  @Output() closeModal = new EventEmitter<void>();

  // Method to close product description modal

  close(): void {
    this.closeModal.emit(); // Notify parent to close the modal
  }
}
