import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { CardapioService } from '../services/cardapio.service';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

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
    private location: Location,
    private route: ActivatedRoute) {

    this.formGroup = this.formBuilder.group({
      descricao: {value: ''},
      preco: {value: ''},
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

            this.idProduto = val.id;
            this.formGroup.get('descricao')?.setValue(val.descricao);
            this.formGroup.get('preco')?.setValue(val.preco);
          }
        }
      );
    }

    if(this.pedido) {

      this.formGroup.get('descricao')?.disable();
      this.formGroup.get('preco')?.disable();
    }
  }

  salvarItem() {

    if(this.idEditar == null) {

      this.service.salvar(this.formGroup.value).subscribe(() => this.location.back());
    }else {

      this.service.editar(this.formGroup.value).subscribe(() => this.location.back());
    }
  }

  cancelar() {

    this.location.back();
  }

  adicionarItem() {

    //Adiciona o item e a quantidade no carrinho, que é armazenado na sessão
    var carrinhoSessao = sessionStorage.getItem("carrinho");

    if(carrinhoSessao === null) {

      carrinhoSessao = "[]";
    }

    let itensCarrinho = JSON.parse(carrinhoSessao);

    itensCarrinho.push({"idProduto": this.idProduto, "quantidade": this.formGroup.get('quantidade')?.getRawValue()});
    sessionStorage.setItem('carrinho', JSON.stringify(itensCarrinho));

    this.location.back();
  }
}
