import { PedidoService } from './services/pedido.service';
import { Component } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import { ItemCardapio } from '../modelos/item-cardapio';
import { CardapioService } from '../cardapio/services/cardapio.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-pedido',
  standalone: true,
  imports: [
    MatSelectModule,
    CommonModule,
    MatButtonModule
  ],
  templateUrl: './pedido.component.html',
  styleUrl: './pedido.component.scss'
})
export class PedidoComponent {

public itensCardapio$: Observable<ItemCardapio[]> | null = null;

  pedido: string = '';

  constructor(
    private cardapioService: CardapioService,
    private pedidoService: PedidoService
  ) {

    this.itensCardapio$ = this.cardapioService.listar().pipe();
  }

  realizarPedido() {

    this.pedidoService.listar().subscribe();
  }
}
