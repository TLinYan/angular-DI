import { Component, OnInit } from '@angular/core';
import { ProductServeService, Product } from '../share/product-serve.service'
import { ProductServe2Service } from '../share/product-serve2.service'

@Component({
  selector: 'app-product2',
  templateUrl: './product2.component.html',
  styleUrls: ['./product2.component.css'],
  // 私有组件中提供器
  providers: [{
    provide: ProductServeService, //指向使用的token，有继承就写继承的，没有就写自己专属的
    useClass: ProductServe2Service  //使用专属类(本服务用的那个)
  }]
})
export class Product2Component implements OnInit {

  product2: Product

  //注入进依赖
  constructor(private productServe: ProductServeService) { }

  ngOnInit() {
    this.product2 = this.productServe.getProduct()
  }

}
