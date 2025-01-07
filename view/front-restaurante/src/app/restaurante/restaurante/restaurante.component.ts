import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurante',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './restaurante.component.html',
  styleUrl: './restaurante.component.scss'
})
export class RestauranteComponent {

  constructor(
    private router: Router
  ) {

  }

  redirecionaCardapio() {

    this.router.navigate(["cardapio"])
  }

  redirecionaCozinha() {

    this.router.navigate(["cozinha"])
  }

  redirecionaPedido() {

    this.router.navigate(["pedido"])
  }
}
