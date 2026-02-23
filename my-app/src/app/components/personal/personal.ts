import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EdadPipe } from '../../pipes/edad-pipe';

@Component({
  selector: 'app-personal',
  standalone: true,
  imports: [CommonModule, EdadPipe],
  templateUrl: './personal.html',
  styleUrl: './personal.css',
})
export class Personal {

    imagenes: string[] = [
    'archivos/personal-1.png',
    'archivos/personal-2.png',
    'archivos/personal-3.png',
    'archivos/personal-4.png',
    'archivos/personal-5.png',
    'archivos/personal-6.png',
  ];

  indiceActual: number = 0;

  siguiente() {
    this.indiceActual =
      (this.indiceActual + 1) % this.imagenes.length;
  }

  anterior() {
    this.indiceActual =
      (this.indiceActual - 1 + this.imagenes.length) % this.imagenes.length;
  }
}

