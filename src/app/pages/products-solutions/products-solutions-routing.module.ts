import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsSolutionsComponent } from './products-solutions.component';

const routes: Routes = [{ path: '', component: ProductsSolutionsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsSolutionsRoutingModule { }
