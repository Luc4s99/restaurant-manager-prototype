import { CardapioFormComponent } from './restaurante/cardapio/cardapio-form/cardapio-form.component';
import { Routes } from '@angular/router';
import { CardapioComponent } from './restaurante/cardapio/cardapio.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'restaurante' },
  {
    path: 'restaurante',
    loadChildren: () => import('./restaurante/restaurante.module').then(m => m.RestauranteModule)
  },
  {
    path: 'cardapio',
    component: CardapioComponent
  },
  {
    path: 'cardapio/novo',
    component: CardapioFormComponent
  }
];
