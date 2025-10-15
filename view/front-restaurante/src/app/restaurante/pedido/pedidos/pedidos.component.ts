import { ActivatedRoute, Router } from '@angular/router';
import { PedidoService } from './../services/pedido.service';
import { Component } from '@angular/core';
import { Pedido } from '../../modelos/pedido';
import { MatTableModule } from '@angular/material/table';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pedidos',
  standalone: true,
  imports: [
    MatTableModule,
    CommonModule],
  templateUrl: './pedidos.component.html',
  styleUrl: './pedidos.component.scss'
})
export class PedidosComponent {

  pedidos: Pedido[] = [];
  public pedidos$: Observable<Pedido[]> | null = null;
  displayedColumns: string[] = ['item', 'status'];

  constructor(
    private pedidoService : PedidoService,
    private router: Router,
    private route: ActivatedRoute
  ) {

    //Busca pelos pedidos já feitos
    this.pedidos$ = pedidoService.listar();
  }
}
