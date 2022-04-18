import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarriersRoutingModule } from './carriers-routing.module';
import { CarriersComponent } from './carriers.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';


@NgModule({
  declarations: [CarriersComponent],
  imports: [
    CommonModule,
    CarriersRoutingModule,
    NgMultiSelectDropDownModule.forRoot(),
  ]
})
export class CarriersModule { }
