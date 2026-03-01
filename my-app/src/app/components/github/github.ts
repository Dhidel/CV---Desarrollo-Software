import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GithubService } from '../../services/github'; 

@Component({
  selector: 'app-github',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './github.html',
  styleUrls: ['./github.css']
})
export class GithubComponent implements OnInit {
  repos: any[] = [];

  constructor(private githubService: GithubService) {}

  ngOnInit(): void {
    this.githubService.getRepos().subscribe({
      next: (data) => {
        this.repos = data; 
      },
      error: (err) => console.error('Error al cargar repos', err)
    });
  }
}