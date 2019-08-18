import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/ProductService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: any[] = [];
  isLoading: Boolean = false;

  constructor(
    private productService: ProductService,
    private _router: Router,
  ) { }

  async ngOnInit() {
    try {
      this.isLoading = true;
      this.products = await this.productService.getProducts();
    } catch (e) {
      if (e.status === 401) {
        this._router.navigate(['/login']);
      }
    } finally {
      this.isLoading = false;
    }

  }

}
