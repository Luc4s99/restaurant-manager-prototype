import { ItemCardapio } from "./item-cardapio";
import { Pedido } from "./pedido";

export interface ItemPedido {

  id: string;
  item: string;
  quantidade: number;
  pedido: string;
}
