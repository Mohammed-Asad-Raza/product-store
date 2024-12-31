import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { ProductService } from './service/product.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, ProductComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'product-store-app';

  products: any[] = [];
  // isLoading = true;
  // errorMessage: string = '';

  // constructor(private productService: ProductService) {}

  // ngOnInit(): void {
  //   this.productService.getAllProducts().subscribe({
  //     next: (data: any) => {
  //       this.products = data;
  //       this.isLoading = false; // Stop loading when data is fetched
  //     },
  //     error: (err: any) => {
  //       this.errorMessage = 'Failed to load products';
  //       this.isLoading = false; // Stop loading even on error
  //     }
  //   });
  // }
}
