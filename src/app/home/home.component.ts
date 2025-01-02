import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../service/product.service';
import { ProductComponent } from '../product/product.component';
import { Product } from '../shared/interface/product.interface';
import { SearchComponent } from '../shared/search/search.component';
import { FilterPipe } from '../pipes/filter.pipe';
import { ProductDescriptionComponent } from '../product-description/product-description.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, ProductComponent, SearchComponent, FilterPipe, ProductDescriptionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  products: Product[] = [];
  filteredProducts: Product[] = [];
  isLoading = true;
  errorMessage: string = '';
  searchTerm: any;
  selectedProduct!: Product;
  showModal: boolean = false;

  constructor(private productService: ProductService) {

  }

  ngOnInit(): void {
    this.getAllProducts();
  }

  // Fetch all products

  getAllProducts(): void {
    this.productService.getAllProducts().subscribe({
      next: (data: Product[]) => {
        this.products = data;
        this.filteredProducts = data;
        this.sortByPrice();
        this.isLoading = false;
      },
      error: (err: any) => {
        console.error('Error fetching products:', err);
        this.errorMessage = 'Failed to load products';
        this.isLoading = false;
      }
    });
  }

  // Sorting in ascending order by price

  sortByPrice(): void {
    this.products.sort((a: Product, b: Product) => a.price - b.price);
  }

  // Search method using title

  onSearch(term: string): void {
    console.log('term', term);
    
    this.searchTerm = term;
    this.filteredProducts = this.products.filter(product =>
      product.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }


  handleProductSelected(product: Product): void {
    // Reset modal state and reopen
    this.selectedProduct = product;
    this.showModal = false;

    setTimeout(() => {
      this.selectedProduct = product;
      this.showModal = true;
    });
  }

  closeModal(): void {
    this.showModal = false;
  }
}
