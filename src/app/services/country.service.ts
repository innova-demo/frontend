import { Country } from '../models/country';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  webApiUrl: string = 'http://localhost:8080/backend/country';

  constructor(private http: HttpClient) { }

  getAllCountries() {
    return this.http.get<Country[]>(this.webApiUrl);
  }
}
