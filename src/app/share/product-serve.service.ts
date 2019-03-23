
// 模块服务
import { Injectable } from '@angular/core';

// 此装饰器使其他的服务可以注入进此服务
@Injectable({
  providedIn: 'root'
})
export class ProductServeService {

  constructor() { }

  getProduct(): Product {
    return new Product(1, 'Banana', 8.88, '南极香蕉')
  }
}
export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public desc: string
  ) { }
}