import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { DicePage } from './dice.page';

import { DicePageRoutingModule } from './dice-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DicePageRoutingModule
  ],
  declarations: [DicePage]
})
export class DicePageModule {}
