import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class NasaService {
  private apiUrl = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY';

  constructor(private http: HttpClient) {}

  getImagenDelDia(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}