import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {

}
