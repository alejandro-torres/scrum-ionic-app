import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManifestoPageRoutingModule } from './manifesto-routing.module';

import { ManifestoPage } from './manifesto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManifestoPageRoutingModule
  ],
  declarations: [ManifestoPage]
})
export class ManifestoPageModule {}
