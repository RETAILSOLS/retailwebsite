import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WhitelableRoutingModule } from './whitelable-routing.module';
import { WhitelableComponent } from './whitelable.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';


@NgModule({
  declarations: [WhitelableComponent],
  imports: [
    CommonModule,
    WhitelableRoutingModule,
    NgMultiSelectDropDownModule.forRoot(),
  ]
})
export class WhitelableModule { }
