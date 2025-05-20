import { PedidoService } from './services/pedido.service';
import { Component } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import { ItemCardapio } from '../modelos/item-cardapio';
import { CardapioService } from '../cardapio/services/cardapio.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { FormBuilder, FormGroup } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-pedido',
  standalone: true,
  imports: [
    MatFormFieldModule,
    ReactiveFormsModule,
    MatSelectModule,
    CommonModule,
    MatButtonModule
  ],
  templateUrl: './pedido.component.html',
  styleUrl: './pedido.component.scss'
})
export class PedidoComponent {

  formGroup: FormGroup;
  public itensCardapio$: Observable<ItemCardapio[]> | null = null;

  pedido: string = '';

  constructor(private formBuilder: FormBuilder,
    private cardapioService: CardapioService,
    private pedidoService: PedidoService
  ) {

    this.formGroup = this.formBuilder.group({
      pedido: [null],
      quantidade: [null]
    });

    this.itensCardapio$ = this.cardapioService.listar().pipe();
  }

  realizarPedido() {

    this.pedidoService.pedir(this.formGroup.value).subscribe();
  }
}
