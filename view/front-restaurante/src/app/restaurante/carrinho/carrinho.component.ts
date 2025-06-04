import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

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

  itensCarrinho: object[] = [];
  displayedColumns: string[] = ['idProduto', 'quantidade'];

  constructor() {

    let itensString = sessionStorage.getItem("carrinho");

    if(itensString === null) {

      this.itensCarrinho = [];
    }else {

      this.itensCarrinho = JSON.parse(itensString);
    }
  }

  pedir() {

  }
}
