import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';

import { ProductServeService } from './share/product-serve.service';
import { OtherServeService } from './share/other-serve.service';
import { Product2Component } from './product2/product2.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    Product2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  // 模块依赖提供器（传入全局依赖）
  providers: [ProductServeService, OtherServeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
