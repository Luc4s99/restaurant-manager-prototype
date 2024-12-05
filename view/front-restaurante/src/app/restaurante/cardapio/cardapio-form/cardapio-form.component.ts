import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { CardapioService } from '../services/cardapio.service';
import { Location } from '@angular/common';

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

  formGroup: FormGroup

  constructor(private formBuilder: FormBuilder,
    private service: CardapioService,
    private location: Location) {

    this.formGroup = this.formBuilder.group({
      descricao: [null],
      preco: [null]
    });
  }

  salvarItem() {

    this.service.salvar(this.formGroup.value).subscribe(() => this.location.back());
  }

  cancelar() {

    this.location.back();
  }
}
