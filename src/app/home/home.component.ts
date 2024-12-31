import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../service/product.service';
import { ProductComponent } from '../product/product.component';
import { Product } from '../shared/interface/product.interface';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, ProductComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  products: any = [];
  isLoading = true;
  errorMessage: string = '';

  constructor(private productService: ProductService) {

  }


  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.productService.getAllProducts().subscribe({
      next: (data: any) => {
        console.log('Fetched products:', data); // Log the data to check if it's fetched
        this.products = data;
        this.sortByPrice();
        this.isLoading = false; // Stop the loading spinner
      },
      error: (err: any) => {
        console.error('Error fetching products:', err); // Log any error from the API
        this.errorMessage = 'Failed to load products';
        this.isLoading = false;
      }
    });
  }

  sortByPrice(): void {
    this.products.sort((a: Product, b: Product) => a.price - b.price);
  }
}
