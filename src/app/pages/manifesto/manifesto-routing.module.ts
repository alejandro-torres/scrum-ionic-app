import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManifestoPage } from './manifesto.page';

const routes: Routes = [
  {
    path: '',
    component: ManifestoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManifestoPageRoutingModule {}
