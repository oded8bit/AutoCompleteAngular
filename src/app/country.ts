/**
 * Country class
 */
export class Country {
    public alpha2Code : string; // "AE"
    public area : string;    //83600
    public capital: string;  // "Abu Dhabi"
    public flag: string;     // "https://restcountries.eu/data/are.svg"
    public name : string;    // "United Arab Emirates"
    public region: string;   // "Asia"
  
    constructor( name: string ) {
      this.name = name;
    }
    equal(name: string) : boolean {
      return this.name == name;
    }
  
    contains( name: string ) : boolean {
      return (this.name.toLowerCase().indexOf(name) > -1);
    }

    normalize() : string {
      return this.name + " {Capital: "+this.capital+"  Region: "+this.region+"  Area: "+this.area+"  Code: "+this.alpha2Code+"}";
    }
  
    toString() : string {
      return this.name;
    }
  }
  