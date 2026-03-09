import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router'
import { GithubService } from '../../../services/github';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nxt-board-detail',
  standalone: true,
  imports: [RouterLink, RouterOutlet, CommonModule],
  templateUrl: './nxt-board-detail.html',
  styleUrl: './nxt-board-detail.css',
})
export class NxtBoardDetail implements OnInit {

  repo: any;
  languages: string[] = [];
  rating: number = 0;
  topics: string[] = [];

  constructor(private githubService: GithubService) {}

  ngOnInit(): void {

    const repoName = 'NXT-Board';

    this.githubService.getRepo(repoName).subscribe(data => {
      this.repo = data;

      // calcular valoración basada en stars
      this.calculateRating(this.repo.stargazers_count);
    });

    this.githubService.getRepoLanguages(repoName).subscribe(langObj => {
      this.languages = Object.keys(langObj);
    });
  
    this.githubService.getRepoTopics(repoName).subscribe({
    next: (t) => this.topics = t.names || [],
    error: () => this.topics = []
  });
  }

  calculateRating(stars: number) {
    // cada 5 estrellas = 1 punto (máx 5)
    this.rating = Math.min(5, Math.ceil(stars / 5));
  }

  getStarsArray(): number[] {
    return Array(5).fill(0).map((_, i) => i < this.rating ? 1 : 0);
  }
}