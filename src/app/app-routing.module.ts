import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'manifesto',
    pathMatch: 'full'
  },
  {
    path: 'definition',
    loadChildren: () => import('./pages/definition/definition.module').then( m => m.DefinitionPageModule)
  },
  {
    path: 'theory',
    loadChildren: () => import('./pages/theory/theory.module').then( m => m.TheoryPageModule)
  },
  {
    path: 'values',
    loadChildren: () => import('./pages/values/values.module').then( m => m.ValuesPageModule)
  },
  {
    path: 'team',
    loadChildren: () => import('./pages/team/team.module').then( m => m.TeamPageModule)
  },
  {
    path: 'events',
    loadChildren: () => import('./pages/events/events.module').then( m => m.EventsPageModule)
  },
  {
    path: 'artifacts',
    loadChildren: () => import('./pages/artifacts/artifacts.module').then( m => m.ArtifactsPageModule)
  },
  {
    path: 'manifesto',
    loadChildren: () => import('./pages/manifesto/manifesto.module').then( m => m.ManifestoPageModule)
  }






];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
