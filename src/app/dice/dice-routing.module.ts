import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DicePage } from './dice.page';

const routes: Routes = [
  {
    path: '',
    component: DicePage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DicePageRoutingModule {}
