import { Pedido } from './../../modelos/pedido';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  private readonly GATEWAY = "http://localhost:8080/pedido";

  constructor(private httpClient : HttpClient) { }

  pedir(pedido: Pedido) {

    return this.httpClient.post<Pedido>(this.GATEWAY, pedido);
  }
}
