import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Country } from '../country';

/**
 * Search Service
 * 
 * 
 */
@Injectable()
export class SearchService {

  // REST API base URL
  private baseUrl: string = 'https://restcountries.eu/rest/v2';
  // The data that we want to search in
  private db : Country [] = [];
  
  /**
   * Loads the data from the REST API and converts it to an array of objects
   * @param http HTTP service
   */
  constructor(private http : Http) { 
    var obj;
    this.getAll().subscribe(data => { 
      for(let i in data){
        this.db.push(data[i]);
      }
    } , error => console.log(error));;
  }

  /**
   * The REST API call. Returns an observable
   */
  getAll(): Observable<any>{
    let countries = this.http
                    .get(`${this.baseUrl}/all`)
                    .map((res:Response) => res.json().map(obj=> this.toCountry(obj)));  
    return countries;
  }

  /**
   * Converts a JSON entry to a class
   * @param r the JSON entry
   */
  private toCountry(r:any): Country{
    let country = new Country('');
    country.alpha2Code = r.alpha2Code;
    country.name = r.name;
    country.capital = r.capital;
    country.area = r.area;
    return country;
  }

  /**
   * Called to return optional countries
   * @param query the query string
   */
  autoComplete(query:string) : Country[] {
    var suggestions = [];
    if (query !== ""){
        suggestions = this.db.filter(
            item => item.contains(query.toLowerCase()) 
          );
        return suggestions;
    }else{
        return [];
    }
  }


  /**
   * Prints the data
   */
  print() {
    let s = "";
    for (let i=0 ; i < this.db.length; i++) {
      var c : Country = this.db[i];
      console.log(c.toString());
    }
  } 
}

