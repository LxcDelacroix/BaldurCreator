import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CharactersListPage } from './characters-list.page';

const routes: Routes = [
  {
    path: '',
    component: CharactersListPage
  },
  {
    path: 'new',
    loadChildren: () => import('./character-new/character-new.module').then( m => m.CharacterNewPageModule)
  },
  {
    path: ':id',
    loadChildren: () => import('./character/character.module').then( m => m.CharacterPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CharactersListPageRoutingModule {}
