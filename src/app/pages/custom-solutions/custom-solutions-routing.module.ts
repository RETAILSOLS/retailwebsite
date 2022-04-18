import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomSolutionsComponent } from './custom-solutions.component';

const routes: Routes = [{ path: '', component: CustomSolutionsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomSolutionsRoutingModule { }
