import { ItemCardapio } from './../../modelos/item-cardapio';
import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { CardapioService } from '../services/cardapio.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { UUID } from 'node:crypto';

@Component({
  selector: 'app-cardapio-form',
  standalone: true,
  imports: [
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './cardapio-form.component.html',
  styleUrl: './cardapio-form.component.scss'
})
export class CardapioFormComponent {

  formGroup: FormGroup;
  idEditar: string | null = null;

  constructor(private formBuilder: FormBuilder,
    private service: CardapioService,
    private location: Location,
    private route: ActivatedRoute) {

    this.formGroup = this.formBuilder.group({
      descricao: [null],
      preco: [null]
    });

    this.idEditar = this.route.snapshot.paramMap.get('id')

    if(this.idEditar != null) {

      this.service.buscarPorId(this.idEditar).subscribe(
        val => {

          if(val != null) {

            this.formGroup = this.formBuilder.group({

              id: val.id,
              descricao: val.descricao,
              preco: val.preco
            });
          }
        }
      );
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
}
