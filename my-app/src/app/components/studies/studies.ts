import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-studies',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './studies.html',
  styleUrl: './studies.css',
})
export class Studies {
colegio = {name: 'Torre Fuerte', level: 1}
universidad = {name: 'Francisco Marroquín', level: 0.3}

}
