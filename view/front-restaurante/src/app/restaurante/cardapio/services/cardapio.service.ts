import { Injectable } from '@angular/core';
import { ItemCardapio } from '../../modelos/item-cardapio';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CardapioService {

  private readonly GATEWAY = "http://localhost:8080/catalogo";

  constructor(private httpClient : HttpClient) { }

  listar() {

    return this.httpClient.get<ItemCardapio[]>(this.GATEWAY);
  }
}
