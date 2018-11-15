import { Team } from '../models/team';
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
export class TeamService {
  webApiUrl: string = 'http://localhost:8080/backend/team';
	
  constructor(private http: HttpClient) { }

  getAllTeams() {
  	return this.http.get<Team[]>(this.webApiUrl);
  }

  saveTeam(team: Team) {
    const body = JSON.stringify(team);
    return this.http.post<any>(this.webApiUrl, body, httpOptions);
  }

  updateTeam(team: Team) {
    const body = JSON.stringify(team);
    return this.http.put<any>(this.webApiUrl + "/" + team.id, body, httpOptions);
  }

  deleteTeam(id: number) {
    return this.http.delete<any>(this.webApiUrl + "/" + id, httpOptions);    
  }

}
