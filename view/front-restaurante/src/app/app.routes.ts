import { CardapioFormComponent } from './restaurante/cardapio/cardapio-form/cardapio-form.component';
import { Routes } from '@angular/router';
import { CardapioComponent } from './restaurante/cardapio/cardapio.component';
import { CozinhaComponent } from './restaurante/cozinha/cozinha/cozinha.component';
import { PedidoComponent } from './restaurante/pedido/pedido.component';
import { CarrinhoComponent } from './restaurante/carrinho/carrinho.component';
import { PedidosComponent } from './restaurante/pedido/pedidos/pedidos.component';

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
  },
  {
    path: 'cardapio/editar/:id',
    component: CardapioFormComponent
  },
  {
    path: 'cardapio/:id',
    component: CardapioFormComponent
  },
  {
    path: 'carrinho',
    component: CarrinhoComponent
  },
  {
    path: 'cozinha',
    component: CozinhaComponent
  },

  {
    path: 'pedido',
    component: PedidoComponent
  },

  {
    path: 'pedidos',
    component: PedidosComponent
  }
];
