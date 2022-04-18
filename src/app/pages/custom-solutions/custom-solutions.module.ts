import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomSolutionsRoutingModule } from './custom-solutions-routing.module';
import { CustomSolutionsComponent } from './custom-solutions.component';


@NgModule({
  declarations: [CustomSolutionsComponent],
  imports: [
    CommonModule,
    CustomSolutionsRoutingModule
  ]
})
export class CustomSolutionsModule { }
