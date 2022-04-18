import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OurExpertiseComponent } from './our-expertise.component';

const routes: Routes = [{ path: '', component: OurExpertiseComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OurExpertiseRoutingModule { }
