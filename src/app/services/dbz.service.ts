import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  constructor(private htpp: HttpClient) { }

  getPersonajes(){
    return this.htpp.get('https://dragonball-api.com/api/characters');
  }
}
