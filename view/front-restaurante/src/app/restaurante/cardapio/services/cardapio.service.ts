import { ItemCardapio } from './../../modelos/item-cardapio';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardapioService {

  private readonly GATEWAY = "http://localhost:8080/cardapio";

  constructor(private httpClient : HttpClient) { }

  listar() {

    return this.httpClient.get<ItemCardapio[]>(this.GATEWAY);
  }

  salvar(itemCardapio: ItemCardapio): Observable<ItemCardapio> {

    return this.httpClient.post<ItemCardapio>(this.GATEWAY + "/novo", itemCardapio);
  }

  remover(id: string) {

    return this.httpClient.delete<ItemCardapio>(this.GATEWAY + `/excluir/${id}`);
  }

  editar(itemCardapio : ItemCardapio) {

    return this.httpClient.put<ItemCardapio>(this.GATEWAY + `/editar/${itemCardapio.id}`, itemCardapio);
  }

  buscarPorId(id: string) {

    return this.httpClient.get<ItemCardapio>(this.GATEWAY + `/${id}`);
  }
}
