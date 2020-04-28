import { ProductsComponent } from './components/products/products.component';
import { RouterModule } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductRoutingModule } from './product-routing.module';
import { MaterialModule } from '@material/material.module';



@NgModule({
  declarations: [
    ProductComponent,
    ProductDetailsComponent,
    ProductsComponent
  ],
  imports: [
    ProductRoutingModule,
    CommonModule,
    RouterModule,
    MaterialModule
  ]
})
export class ProductModule { }
