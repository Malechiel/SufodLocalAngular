import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Compte } from '../model/compte';

@Injectable({
  providedIn: 'root',
})
export class CompteService {
  url: string = 'http://localhost:8080/sufod/api/compte';

  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<Compte[]> {
    return this.httpClient.get<Compte[]>(this.url);
  }

  getById(id: number): Observable<Compte> {
    return this.httpClient.get<Compte>(`${this.url}/${id}`);
  }

  delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.url}/${id}`);
  }

  update(compte: Compte): Observable<Compte> {
    return this.httpClient.put<Compte>(`${this.url}/${compte.pseudo}`, compte);
  }

  create(compte: Compte) {
    let compteJson = {
      login: compte.pseudo,
    };
    return this.httpClient.post<Compte>(this.url, compteJson);
  }
}
