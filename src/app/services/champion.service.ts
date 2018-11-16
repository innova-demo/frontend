import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders(
    {'Content-Type' : 'application/json'}
  )
};

@Injectable({
  providedIn: 'root'
})
export class ChampionService {
  webApiUrl: string = 'http://localhost:8080/backend/champion';

  constructor(private http: HttpClient) { }

  deleteChampion(id: number) {
    return this.http.delete<any>(this.webApiUrl + "/" + id, httpOptions);    
  }

}
