import { Component, OnInit } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { Data } from '../../services/data';
import { NasaService } from '../../services/nasa';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [LucideAngularModule, CommonModule],
  templateUrl: './contacts.html',
  styleUrl: './contacts.css',
})
export class Contacts implements OnInit {
  datosNasa: any;

  constructor(public data: Data, private nasaService: NasaService) {}

  ngOnInit(): void {
    this.nasaService.getImagenDelDia().subscribe({
      next: (res) => {
        this.datosNasa = res;
      },
      error: (err) => console.error('Error con NASA API', err)
    });
  }
}