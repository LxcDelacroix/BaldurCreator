import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CharacterNewPage } from './character-new.page';

const routes: Routes = [
  {
    path: '',
    component: CharacterNewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CharacterNewPageRoutingModule {}
