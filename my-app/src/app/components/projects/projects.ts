import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { GithubService } from '../../services/github';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects implements OnInit{
repos: any[] = [];
 constructor(private githubService: GithubService) {}
 ngOnInit(): void {
 this.githubService.getRepos().subscribe(data => {
 this.repos = data;
 })}}
