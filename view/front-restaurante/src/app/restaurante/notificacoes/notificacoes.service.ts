import { Injectable } from '@angular/core';
import { inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificacoesService {

  private servicoMensagem = inject(MatSnackBar);

  constructor() { }

  mensagemSucesso(mensagem: string, mensagemBotao: string) {

    this.servicoMensagem.open(mensagem, mensagemBotao, {

      duration: 6000,
      verticalPosition: 'top',
      panelClass: ['msg-sucesso']
    });
  }

  mensagemErro(mensagem: string, mensagemBotao: string) {

    this.servicoMensagem.open(mensagem, mensagemBotao, {

      verticalPosition: 'top',
      panelClass: ['msg-erro']
    });
  }
}
