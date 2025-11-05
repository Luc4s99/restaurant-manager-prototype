import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PedidoItem } from '../../modelos/pedidoItem';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  private readonly GATEWAY = "http://localhost:8080/pedido";

  constructor(
    private httpClient : HttpClient
  ) { }

  retornaItensCarrinho() {

    var carrinhoSessao = sessionStorage.getItem("carrinho");

    if(carrinhoSessao === null) {

      carrinhoSessao = "[]";
    }

    return JSON.parse(carrinhoSessao);
  }

  listar() {

    return this.httpClient.get<PedidoItem[]>(this.GATEWAY);
  }

  salvarItens(itensCarrinho: PedidoItem[]) {

    return this.httpClient.post<PedidoItem[]>(this.GATEWAY + "/novo", itensCarrinho);
  }
}
