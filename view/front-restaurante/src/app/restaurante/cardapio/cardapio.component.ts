import { ItemCardapio } from './../modelos/item-cardapio';
import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { CardapioService } from './services/cardapio.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cardapio',
  standalone: true,
  imports: [
    MatTableModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    CommonModule
  ],
  templateUrl: './cardapio.component.html',
  styleUrl: './cardapio.component.scss'
})
export class CardapioComponent {

  public itensCardapio$: Observable<ItemCardapio[]> | null = null;
  public displayedColumns: string[] = ['descricao', 'preco', 'acoes'];

  constructor(
    private cardapioService: CardapioService,
    private router: Router,
    private route: ActivatedRoute
  ) {

    this.carregarItens();
  }

  carregarItens() {

    this.itensCardapio$ = this.cardapioService.listar().pipe();
  }

  novoItemCardapio() {

    this.router.navigate(["novo"], {relativeTo: this.route})
  }

  editarItem(item: ItemCardapio) {

    this.router.navigate(["editar", item.id], {relativeTo: this.route})
  }

  removerItem(item: ItemCardapio) {

    this.cardapioService.remover(item).subscribe(
      () => this.carregarItens()
    );
  }
}
