import { Routes } from '@angular/router';
import { CardapioComponent } from './restaurante/cardapio/cardapio.component';
import { CadastroComponent } from './restaurante/cardapio/cadastro/cadastro.component';

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
    component: CadastroComponent
  }
];
