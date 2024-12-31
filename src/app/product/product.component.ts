import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  @Input() product: any;

    // To handle description length
    isDescriptionExpanded = false;

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
}
