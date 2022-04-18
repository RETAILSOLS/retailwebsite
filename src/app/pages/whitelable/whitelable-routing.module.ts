import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WhitelableComponent } from './whitelable.component';

const routes: Routes = [{ path: '', component: WhitelableComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WhitelableRoutingModule { }
