import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from '../interfaces/countries';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private apiUrl: string = 'https://restcountries.com/v3.1'

  constructor(private http: HttpClient) {}

  public searchCapital(query: string) : Observable<Country[]> {
    let url = `${ this.apiUrl }/capital/${ query }`
    return this.http.get < Country[] > ( url )

  }

}
