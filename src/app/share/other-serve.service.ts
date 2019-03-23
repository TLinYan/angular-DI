
// 在其他服务中调用的服务
import { Injectable } from '@angular/core';

// 此装饰器使其他的服务可以注入进此服务
@Injectable({
  providedIn: 'root'
})
export class OtherServeService {

  constructor() { };

  log(message: string) {
    console.log(message);
  }
}
