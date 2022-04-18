import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OurExpertiseRoutingModule } from './our-expertise-routing.module';
import { OurExpertiseComponent } from './our-expertise.component';


@NgModule({
  declarations: [OurExpertiseComponent],
  imports: [
    CommonModule,
    OurExpertiseRoutingModule
  ]
})
export class OurExpertiseModule { }
