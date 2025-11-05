import { CarrinhoService } from './../../carrinho/services/carrinho.service';
import { Produto } from '../../modelos/produto';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { CardapioService } from '../services/cardapio.service';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { NotificacoesService } from '../../notificacoes/notificacoes.service';

@Component({
  selector: 'app-cardapio-form',
  standalone: true,
  imports: [
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    CommonModule
  ],
  templateUrl: './cardapio-form.component.html',
  styleUrl: './cardapio-form.component.scss'
})
export class CardapioFormComponent {

  formGroup: FormGroup;
  idEditar: string | null = null;
  pedido: boolean = false;
  idProduto: string | null = null;

  constructor(private formBuilder: FormBuilder,
    private service: CardapioService,
    private servicoCarrinho: CarrinhoService,
    private location: Location,
    private route: ActivatedRoute,
    private servicoMensagem: NotificacoesService) {

    this.formGroup = this.formBuilder.group({
      descricao: {value: ''},
      precoVenda: {value: ''},
      quantidade: {value: 0}
    });

    this.idEditar = this.route.snapshot.paramMap.get('id');

    this.route.queryParams.subscribe(params => {

      if(params['pedido'] != null && params['pedido'] != undefined) {

        this.pedido = params['pedido'];
      }
    });

    if(this.idEditar != null) {

      this.service.buscarPorId(this.idEditar).subscribe(
        val => {

          if(val != null) {

            this.idProduto = val.idProduto;
            this.formGroup.get('descricao')?.setValue(val.descricao);
            this.formGroup.get('precoVenda')?.setValue(val.precoVenda);
          }
        }
      );
    }

    if(this.pedido) {

      this.formGroup.get('descricao')?.disable();
      this.formGroup.get('precoVenda')?.disable();
    }
  }

  salvarItem() {

    if(this.idEditar == null) {

      this.service.salvar(this.formGroup.value).subscribe(
        {
          next: (result) => {

            this.servicoMensagem.mensagemSucesso('Item salvo com sucesso!', 'Fechar')
          },

          error: (erro) => {

            this.servicoMensagem.mensagemErro('Erro ao salvar item!', 'Fechar')
          }
        }
      );
    }else {

      const itemObj : Produto = {

        idProduto: this.idEditar,
        descricao: this.formGroup.get('descricao')?.getRawValue(),
        precoVenda: this.formGroup.get('precoVenda')?.getRawValue()
      }

      this.service.editar(itemObj).subscribe(() => this.location.back());
    }

    this.location.back();
  }

  cancelar() {

    this.location.back();
  }

  adicionarItem() {

    //Adiciona o item e a quantidade no carrinho, que é armazenado na sessão
    let itensCarrinho = this.servicoCarrinho.retornaItensCarrinho();
    let quantidadeItens = itensCarrinho.length;

    itensCarrinho.push(
      {
        "idPedidoItem": null,
        "idProduto": this.idEditar,
        "quantidade": this.formGroup.get('quantidade')?.getRawValue()
      }
    );
    sessionStorage.setItem('carrinho', JSON.stringify(itensCarrinho));

    //Verifica se o item foi adicionado
    let itensCarrinhoVerificar = this.servicoCarrinho.retornaItensCarrinho();

    if(itensCarrinhoVerificar.length == (quantidadeItens + 1)) {

      this.servicoMensagem.mensagemSucesso('Item adicionado ao carrinho!', 'Fechar')
    }else {

      this.servicoMensagem.mensagemErro('Ocorreu um erro ao adicionar o item, tente novamente!', 'Fechar')
    }

    this.location.back();
  }
}
