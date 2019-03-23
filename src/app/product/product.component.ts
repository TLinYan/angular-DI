import { Component, OnInit } from '@angular/core';
import { Product, ProductServeService } from '../share/product-serve.service'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product: Product

  // 注入
  constructor(private ProductServe: ProductServeService) { }

  ngOnInit() {
    this.product = this.ProductServe.getProduct()
  }

}
