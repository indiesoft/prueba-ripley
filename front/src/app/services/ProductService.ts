import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppService, BASE_URL_API } from '../app.service';

@Injectable()
export class ProductService extends AppService {
  constructor(public http: HttpClient) {
    super(http);
  }

  async getProducts() {
    return await this.get(`${BASE_URL_API}/products`);
  }
}
