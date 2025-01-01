import { Component, EventEmitter, Output } from '@angular/core';
import { Product } from '../interface/product.interface';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Output() searchEvent = new EventEmitter<string>();
  products: Product[] = [];
  productService: any;
  searchTerm: string = '';
  
  // Search Method
  
  onSearch(): void {    
    this.searchEvent.emit(this.searchTerm);
  }
}
