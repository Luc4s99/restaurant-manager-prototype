import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { CarrinhoService } from './services/carrinho.service';
import { ItemPedido } from '../modelos/item-pedido';
import { ActivatedRoute, Router } from '@angular/router';

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

  itensCarrinho: ItemPedido[] = [];
  displayedColumns: string[] = ['item', 'quantidade'];

  constructor(
    private carrinhoService : CarrinhoService,
    private router: Router,
    private route: ActivatedRoute
  ) {

    //Verifica se existem itens armazanados na SessionStorage
    let itensString = sessionStorage.getItem("carrinho");

    if(itensString === null) {

      this.itensCarrinho = [];
    }else {

      this.itensCarrinho = JSON.parse(itensString);
    }
  }

  pedir() {

    this.carrinhoService.salvarItens(this.itensCarrinho).subscribe(() => {

      this.router.navigate(["/pedido"]);
    });

  }
}
