import { Pedido } from "./pedido";

export interface PedidoItem {

  idPedidoItem: string;
  idProduto: string;
  quantidade: number;
  idPedido: Pedido;
}
