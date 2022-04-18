import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CertificatesBlockcatsRoutingModule } from './certificates-blockcats-routing.module';
import { CertificatesBlockcatsComponent } from './certificates-blockcats.component';


@NgModule({
  declarations: [CertificatesBlockcatsComponent],
  imports: [
    CommonModule,
    CertificatesBlockcatsRoutingModule
  ]
})
export class CertificatesBlockcatsModule { }
