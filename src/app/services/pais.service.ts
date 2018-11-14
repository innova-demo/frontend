import { Pais } from '../models/pais';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  webApiUrl: string = 'http://localhost:8080/pais';

  constructor(private http: HttpClient) { }

  getAllPaises() {
    return this.http.get<Pais[]>(this.webApiUrl);
  }
}
