import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-skills',
  imports: [CommonModule, FormsModule],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  buscador: string = '';

  frontend = ['HTML', 'CSS', 'Bootstrap', 'JavaScript'];
  backend = ['Python', 'C#', 'PostMan', 'Angular'];
  fundamentos = ['Algoritmos', 'Estructura de Datos', 'Desarrollo Web', 'POO'];

  filtrar(lista: string[]) {
    return lista.filter(item =>
      item.toLowerCase().includes(this.buscador.toLowerCase())
    );
  }
}

