import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CharacterNewPageRoutingModule } from './character-new-routing.module';

import { CharacterNewPage } from './character-new.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CharacterNewPageRoutingModule
  ],
  declarations: [CharacterNewPage]
})
export class CharacterNewPageModule {}
