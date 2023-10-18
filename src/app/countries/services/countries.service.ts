import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from '../interfaces/countries';
import { Observable, catchError, of, map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private apiUrl: string = 'https://restcountries.com/v3.1'

  constructor(private http: HttpClient) {}

  public searchCountryByAlphacode ( code : string ) : Observable<Country | null > {

    let url = `${ this.apiUrl }/alpha/${ code }`
    return this.http.get < Country[] > ( url )
                                            .pipe(
                                              map( countries => countries.length > 0 ? countries[0] : null),
                                              catchError( error => of ( null ))

                                            )
  }



  public searchCapital(query: string) : Observable<Country[]> {
    let url = `${ this.apiUrl }/capital/${ query }`
    return this.http.get < Country[] > ( url ) .pipe(
      catchError( error => of ([]))

    )

  }


  public searchCountry( term : string ) : Observable<Country []> {
    let url = `${ this.apiUrl }/name/${ term }`
    return this.http.get < Country[] > ( url ) .pipe(
      catchError( error => of ([]))

    )
  }

  public searchRegion( region : string ) : Observable<Country []> {
    let url = `${ this.apiUrl }/region/${ region }`
    return this.http.get < Country[] > ( url ) .pipe(
      catchError( error => of ([]))

    )
  }


}
