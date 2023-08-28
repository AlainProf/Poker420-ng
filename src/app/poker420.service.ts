import { Injectable } from '@angular/core';
import { urlServeur } from './util';
import { HttpClient } from '@angular/common/http';
import { Joueur } from './modele/joueur';



@Injectable({
  providedIn: 'root'
})
export class Poker420Service {

  constructor(private http:HttpClient) { }

  getJoueurs()
  {
    let url =urlServeur + "getJoueurs";

    return this.http.get<Joueur[]>(url);
  }

}
