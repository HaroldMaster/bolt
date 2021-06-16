import { Injectable } from '@angular/core';
import { CodeCountry } from '../models/code-countries.model';

@Injectable({
  providedIn: 'root'
})
export class CountryCodeService {
  private codeCountries: CodeCountry[] =
  [
    {name:'Ecuador', img:'https://www.countryflags.io/ec/shiny/32.png', code:'+593'},
    {name:'Colombia', img:'https://www.countryflags.io/co/shiny/32.png', code:'+522'},
    {name:'Perú', img:'https://www.countryflags.io/pe/shiny/32.png', code:'+213'},
  ]
  constructor() { }
  getCountries(){
    return this.codeCountries;
  }
}
