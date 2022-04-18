import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlockchainServiceRoutingModule } from './blockchain-service-routing.module';
import { BlockchainServiceComponent } from './blockchain-service.component';


@NgModule({
  declarations: [BlockchainServiceComponent],
  imports: [
    CommonModule,
    BlockchainServiceRoutingModule
  ]
})
export class BlockchainServiceModule { }
