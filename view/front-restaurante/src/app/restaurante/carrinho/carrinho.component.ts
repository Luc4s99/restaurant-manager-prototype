import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { CarrinhoService } from './services/carrinho.service';
import { PedidoItem } from '../modelos/pedidoItem';
import { ActivatedRoute, Router } from '@angular/router';
import { CardapioService } from '../cardapio/services/cardapio.service';

@Component({
  selector: 'app-carrinho',
  standalone: true,
  imports: [
    MatTableModule,
    MatButtonModule
  ],
  templateUrl: './carrinho.component.html',
  styleUrl: './carrinho.component.scss'
})
export class CarrinhoComponent {

  infoItens: {descricao: string, quantidade: number, precoVenda: number}[] = [];
  itensCarrinho: PedidoItem[] = [];
  displayedColumns: string[] = ['descricao', 'quantidade'];

  constructor(
    private carrinhoService : CarrinhoService,
    private catalogoService: CardapioService,
    private router: Router,
    private route: ActivatedRoute
  ) {

    //Verifica se existem itens armazenados na SessionStorage
    this.itensCarrinho = carrinhoService.retornaItensCarrinho();

    console.log(this.itensCarrinho);
  }

  pedir() {

    this.carrinhoService.salvarItens(this.itensCarrinho).subscribe(() => {

      this.router.navigate(["/pedido"]);
    });

  }
}
