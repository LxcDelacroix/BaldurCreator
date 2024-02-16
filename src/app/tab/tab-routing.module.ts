import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabPage } from './tab.page';

const routes: Routes = [
  {
    path: '',
    component: TabPage,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      }, {
        path:'home',
        loadChildren: () => import('../home/home.module').then(m=>m.HomePageModule)
      }, {
        path: 'characters',
        loadChildren: () => import('../characters-list/characters-list.module').then(m=>m.CharactersListPageModule)
      }, {
        path: 'photos',
        loadChildren: () => import('../photos/photos.module').then(m=>m.PhotosPageModule)
      },{
        path: 'dice',
        loadChildren: () => import('../dice/dice.module').then(m=>m.DicePageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabPageRoutingModule {}
