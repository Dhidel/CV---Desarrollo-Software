import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { GithubService } from '../../../services/github';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cv-detail',
  standalone: true,
  imports: [RouterLink, RouterOutlet, CommonModule],
  templateUrl: './cv-detail.html',
  styleUrl: './cv-detail.css',
})
export class CvDetail implements OnInit{
  
repo: any;

languages: string[] = [];
rating: number = 0;
topics: string[] = [];

constructor(private githubService: GithubService) {}

ngOnInit(): void {
  const repoName = 'CV---Desarrollo-Software'; // el nombre EXACTO del repo en GitHub

  this.githubService.getRepo(repoName).subscribe(data => {
    console.log('repo from API:', data);
    this.repo = data;

    this.calculateRating(this.repo.stargazers_count);
  });

  this.githubService.getRepoLanguages(repoName).subscribe(langObj => {
    this.languages = Object.keys(langObj);
  });
          // cargar topics (etiquetas)
  this.githubService.getRepoTopics(repoName).subscribe({
    next: (t) => this.topics = t.names || [],
    error: () => this.topics = []
  });
}
calculateRating(stars: number | undefined) {
  const s = Number(stars || 0);         // asegura un número
  // Ejemplo: escala logarítmica suave para que no se sature con muchos stars:
  // const score = Math.log10(s + 1);   // opcional si quieres otra fórmula
  // Aquí uso versión simple y predecible:
  this.rating = Math.min(5, Math.ceil(s / 5)); // cada 5 stars = 1 punto
  if (!Number.isFinite(this.rating)) this.rating = 0;
}

getStarsArray(): number[] {
  const filled = Math.max(0, Math.min(5, Math.floor(this.rating)));
  return Array.from({ length: 5 }, (_, i) => i < filled ? 1 : 0);
}
}
