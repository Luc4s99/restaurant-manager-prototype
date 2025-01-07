import { Component } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-cozinha',
  standalone: true,
  imports: [
    MatListModule,
    MatCardModule
  ],
  templateUrl: './cozinha.component.html',
  styleUrl: './cozinha.component.scss'
})
export class CozinhaComponent {

}
