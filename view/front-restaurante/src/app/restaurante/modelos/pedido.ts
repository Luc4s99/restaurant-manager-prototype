import { ItemCardapio } from "./item-cardapio";

export interface Pedido {

  id: string;
  item: ItemCardapio;
  quantidade: number;
}
