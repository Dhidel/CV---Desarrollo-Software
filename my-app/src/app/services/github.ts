import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class GithubService {

  private baseUrl = 'https://api.github.com';
  private owner = 'Dhidel'

  constructor(private http: HttpClient) {}

  // Traer todos los repos
  getRepos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/users/Dhidel/repos`);
  }

  // Traer un repo específico
  getRepo(repoName: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/repos/Dhidel/${repoName}`);
  }

  // (Opcional) Traer las tecnologías reales del repo
  getRepoLanguages(repoName: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/repos/Dhidel/${repoName}/languages`);
  }
  getRepoTopics(repoName: string): Observable<{ names: string[] }> {
    const headers = new HttpHeaders({
      'Accept': 'application/vnd.github+json'
    });
    return this.http.get<{ names: string[] }>(`${this.baseUrl}/repos/${this.owner}/${repoName}/topics`, { headers });
  }
}