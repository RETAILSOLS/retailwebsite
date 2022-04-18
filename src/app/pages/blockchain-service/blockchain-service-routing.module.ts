import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlockchainServiceComponent } from './blockchain-service.component';

const routes: Routes = [{ path: '', component: BlockchainServiceComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlockchainServiceRoutingModule { }
