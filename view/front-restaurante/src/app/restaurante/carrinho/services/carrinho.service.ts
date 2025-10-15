import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ItemPedido } from '../../modelos/item-pedido';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  private readonly GATEWAY = "http://localhost:8080/pedido";

  constructor(
    private httpClient : HttpClient
  ) { }

  listar() {

    return this.httpClient.get<ItemPedido[]>(this.GATEWAY);
  }

  salvarItens(itensCarrinho: ItemPedido[]) {

    return this.httpClient.post<ItemPedido[]>(this.GATEWAY + "/novo", itensCarrinho);
  }
}
