import { NotificacoesService } from './../../notificacoes/notificacoes.service';
import { Injectable } from '@angular/core';
import { CardapioService } from '../../cardapio/services/cardapio.service';

@Injectable({
  providedIn: 'root'
})
export class ModalActionsService {

  constructor(
    private cardapioService: CardapioService,
    private servicoMensagem : NotificacoesService
  ) { }

  modalAction(modalData: any) {

    switch (modalData.name) {

      case "product-delete":

        this.deletarProduto(modalData);
        break;

      default:

        break;
    }
  }

  private deletarProduto(modalData: any) {

    this.cardapioService.remover(modalData.itemId).subscribe(
      {
        next: (result) => {

          this.servicoMensagem.mensagemSucesso('Item excluído com sucesso!', 'Fechar')
        },

        error: (erro) => {
          this.servicoMensagem.mensagemErro('Erro ao excluir registro!', 'Fechar');
        }
      }
    );
  }
}
