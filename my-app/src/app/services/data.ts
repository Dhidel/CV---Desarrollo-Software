import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Data {
  frontend: string[] = ['HTML', 'CSS', 'Bootstrap', 'JavaScript'];
  backend: string[] = ['Python', 'C#', 'PostMan', 'Angular'];
  fundamentos: string[] = ['Algoritmos', 'Estructura de Datos', 'Desarrollo Web', 'POO'];

  contacts = {
    phone: '4180-0647',
    location: 'Ciudad de Guatemala',
    email: 'djosorio@ufm.edu',
    github: 'https://github.com/Dhidel',
    linkedin: 'https://linkedin.com'
  };

}

