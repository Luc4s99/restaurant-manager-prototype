import { ItemCardapio } from "./item-cardapio";

export interface Pedido {

  id: string;
  data: Date,
  status : string;
  itens: ItemCardapio[];
}
