import { Produto } from '../../modelos/produto';
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

    return this.httpClient.get<Produto[]>(this.GATEWAY);
  }

  salvar(itemCardapio: Produto): Observable<Produto> {

    return this.httpClient.post<Produto>(this.GATEWAY + "/novo", itemCardapio);
  }

  remover(id: string) {

    return this.httpClient.delete<Produto>(this.GATEWAY + `/excluir/${id}`);
  }

  editar(itemCardapio : Produto) {

    return this.httpClient.put<Produto>(this.GATEWAY + `/editar/${itemCardapio.idProduto}`, itemCardapio);
  }

  buscarPorId(id: string) {

    return this.httpClient.get<Produto>(this.GATEWAY + `/${id}`);
  }
}
