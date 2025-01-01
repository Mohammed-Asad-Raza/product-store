import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductComponent } from '../../product/product.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [ProductComponent, FormsModule, CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  @Output() searchEvent = new EventEmitter<string>();
  searchTerm: string = '';

  // Search Method

  onSearch(): void {
    this.searchEvent.emit(this.searchTerm.trim());
  }
}
