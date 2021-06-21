import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecentVisitedService {
  private recent : Array<{[key:string]:string}> = [
    {place :'Mother and Child Hospital'},
    {place :'Ikeja City Mall', country:'Obafemi Awolowo Way, Ikeja Nigeria'},
    {place: 'Lekky Phase 1', country:'Lekki Nigeria'},
    {place: 'Lekky Phase 1', country:'Lekki Nigeria'},
    {place: 'Lekky Phase 1', country:'Lekki Nigeria'},
    {place: 'Lekky Phase 1', country:'Lekki Nigeria'},
    {place: 'Lekky Phase 1', country:'Lekki Nigeria'},
    {place: 'Lekky Phase 1', country:'Lekki Nigeria'},
    {place: 'Lekky Phase 1', country:'Lekki Nigeria'},
    {place: 'Lekky Phase 1', country:'Lekki Nigeria'},
    {place: 'Lekky Phase 1', country:'Lekki Nigeria'},
  ];
  constructor() { }
  getRecent(){
    return this.recent;
  }
}
