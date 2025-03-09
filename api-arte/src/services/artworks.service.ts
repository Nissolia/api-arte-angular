import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArtworksService {
  private apiUrl = 'https://api.artic.edu/api/v1/artworks';

  constructor(private http: HttpClient) {}

  // Obtener la lista de obras de arte con parámetros personalizados
  getArtworks(fields: string = 'id,title,artist_display,date_display'): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?fields=${fields}`);
  }

  // Obtener una obra específica por ID
  getArtworkById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // Buscar obras de arte por palabra clave
  searchArtworks(query: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/search?q=${query}`);
  }
}
