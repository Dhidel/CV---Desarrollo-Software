import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Data } from '../../services/data';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  buscador: string = '';

  constructor(public data: Data) {}

  filtrar(lista: string[]) {
    return lista.filter(item =>
      item.toLowerCase().includes(this.buscador.toLowerCase())
    );
  }
}

