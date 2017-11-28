import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Country } from '../country';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class NodeSearchService {
  // REST API base URL
  private baseUrl: string = 'http://localhost:3000/ac?ac=';
  
  constructor(private http : Http) { 

  }

  /**
   * Called to return optional countries
   * @param query the query string
   */
  autoComplete(query:string) : Observable<any> {
    var suggestions = [];
    if (query == "")
      return null;

    console.log("Lookup: "+this.baseUrl+query);
    var obj;
    return this.getResults(query);
  }

    /**
   * The REST API call. Returns an observable
   */
  getResults(query : string): Observable<Country[]>{
    var jsn;
    let observ = this.http
                    .get(this.baseUrl+query)
                    .map((res:Response) => res.json() )
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    return observ;
  }

  toCountry(obj) {
    return new Country(obj);
  }

  parseResponse(res: Response) : Country[] {
    let cntries = res.json();
    var js = JSON.parse(cntries);

    var suggestions : Country[] = [];

    for (let i=0 ; i < js.result.length; i++)
      suggestions.push(new Country(js.result[i].country));

      return suggestions;
  }

  private handleError (error: Response | any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}

