import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CertificatesBlockcatsComponent } from './certificates-blockcats.component';

const routes: Routes = [{ path: '', component: CertificatesBlockcatsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CertificatesBlockcatsRoutingModule { }
