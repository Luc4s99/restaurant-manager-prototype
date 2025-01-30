import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestauranteComponent } from './restaurante/restaurante.component';
import { CardapioFormComponent } from './cardapio/cardapio-form/cardapio-form.component';
import { CozinhaComponent } from './cozinha/cozinha/cozinha.component';
import { PedidoComponent } from './pedido/pedido.component';

const routes: Routes = [
  {path: '', component: RestauranteComponent},
  {path: 'cardapio/novo', component: CardapioFormComponent},
  {path: 'cardapio/editar/:id', component: CardapioFormComponent},

  {path: 'cozinha', component: CozinhaComponent},

  {path: 'pedido', component: PedidoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestauranteRoutingModule { }
