
// 组件服务
import { Injectable } from '@angular/core';
import { ProductServeService, Product } from './product-serve.service'
import { OtherServeService } from './other-serve.service';

// 此装饰器使其他的服务可以注入进此服务
@Injectable({
  providedIn: 'root'
})

export class ProductServe2Service implements ProductServeService {

  // 注入其他服务
  constructor(private other: OtherServeService) { };

  getProduct(): Product {
    this.other.log('我是注入进来的服务哦'); //注入进来服务的方法
    return new Product(2, 'Apple', 9.99, '北冰洋苹果');
  };
}
