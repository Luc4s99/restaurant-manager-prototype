import { ItemCardapio } from "./item-cardapio";

export interface ItemPedido {

  id: string;
  item: ItemCardapio;
  quantidade: number;
}
