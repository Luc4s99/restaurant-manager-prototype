import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { ItemCardapio } from '../modelos/item-cardapio';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { CardapioService } from './services/cardapio.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-cardapio',
  standalone: true,
  imports: [
    MatTableModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule
  ],
  templateUrl: './cardapio.component.html',
  styleUrl: './cardapio.component.scss'
})
export class CardapioComponent {

  public itensCardapio: Observable<ItemCardapio[]>;
  public displayedColumns: string[] = ['descricao', 'preco'];

  constructor(
    private cardapioService: CardapioService,
    private router: Router,
    private route: ActivatedRoute
  ) {

    this.itensCardapio = this.cardapioService.listar();
  }

  novoItemCardapio() {

    this.router.navigate(["novo"], {relativeTo: this.route})
  }
}
