import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Personal } from './components/personal/personal';
import { Skills } from './components/skills/skills';
import { Projects } from './components/projects/projects';
import { Studies } from './components/studies/studies';
import { Contacts } from './components/contacts/contacts';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Personal, Skills, Projects, Studies,Contacts  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-app');
}
