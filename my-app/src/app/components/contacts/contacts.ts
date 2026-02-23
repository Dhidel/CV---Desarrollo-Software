import { Component } from '@angular/core';
import { LucideAngularModule} from 'lucide-angular';
import { Data } from '../../services/data';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './contacts.html',
  styleUrl: './contacts.css',
})
export class Contacts {
  constructor(public data: Data) {}
}

