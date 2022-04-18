import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsSolutionsRoutingModule } from './products-solutions-routing.module';
import { ProductsSolutionsComponent } from './products-solutions.component';


@NgModule({
  declarations: [ProductsSolutionsComponent],
  imports: [
    CommonModule,
    ProductsSolutionsRoutingModule
  ]
})
export class ProductsSolutionsModule { }
