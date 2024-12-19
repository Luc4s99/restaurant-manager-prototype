import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestauranteComponent } from './restaurante/restaurante.component';
import { CardapioFormComponent } from './cardapio/cardapio-form/cardapio-form.component';

const routes: Routes = [
  {path: '', component: RestauranteComponent},
  {path: 'novo', component: CardapioFormComponent},
  {path: 'editar/:id', component: CardapioFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestauranteRoutingModule { }
