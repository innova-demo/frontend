import { Equipo } from '../models/equipo';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders(
    {'Content-Type' : 'application/json  '}
  )
};

@Injectable({
  providedIn: 'root'
})
export class EquipoService {
  webApiUrl: string = 'http://localhost:8080/equipo';
	
  constructor(private http: HttpClient) { }

  getAllEquipos() {
  	return this.http.get<Equipo[]>(this.webApiUrl);
  }

  saveEquipo(equipo: Equipo) {
    const body = JSON.stringify(equipo);
    console.log(equipo);
    return this.http.post<any>(this.webApiUrl, body, httpOptions);
  }

  updateEquipo(equipo: Equipo) {
    const body = JSON.stringify(equipo);
    console.log(equipo);
    return this.http.put<any>(this.webApiUrl + "/" + equipo.id, body, httpOptions);
  }

  deleteEquipo(id: number) {
    console.log(id);
    return this.http.delete<any>(this.webApiUrl + "/" + id, httpOptions);    
  }

}
