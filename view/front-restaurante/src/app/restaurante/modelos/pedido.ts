import { Produto } from "./produto";

export interface Pedido {

  id: string;
  data: Date,
  status : string;
  itens: Produto[];
}
