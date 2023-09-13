import { Injectable } from '@angular/core';
import { tr,urlServeur } from './util';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Joueur } from './modele/joueur';
import { InfoPartie } from './modele/infoPartie';



@Injectable({
  providedIn: 'root'
})
export class Poker420Service {

  constructor(private http:HttpClient) { }

 //--------------------------------
  //
  //--------------------------------
  connexion(j:Joueur)
  {
    let url =urlServeur + "connexion";

    const params = new HttpParams( {
     fromObject:  { nom : j.nom,
                    mdp: j.motDePasse
                  }  
      });

      return this.http.post<Joueur>(url, params);
  }

  //--------------------------------
  //
  //--------------------------------
  creationJoueur(j:Joueur)
  {
    let url =urlServeur + "creationJoueur";

    const params = new HttpParams( {
     fromObject:  { nom : j.nom,
                    mdp: j.motDePasse,
                    courriel: j.courriel
                  }  
      });

      return this.http.post<Joueur>(url, params);
  }

  //--------------------------------
  //
  //--------------------------------
  creationPartie(joueurs:Joueur[])
  {
    let url =urlServeur + "creationPartie";
    let joueursEnvoyes = new Array()

    


    for(let i=0; i<10; i++)
    {
      if(joueurs[i] === undefined)
      {
        joueursEnvoyes.push(0)
      }
      else
      {
        joueursEnvoyes.push(joueurs[i].id);
      }
    }

    const params = new HttpParams( {
     fromObject:  { 
      jwt : joueursEnvoyes[0].jwt,
      idJ0 : joueursEnvoyes[0],
      idJ1 : joueursEnvoyes[1],
      idJ2 : joueursEnvoyes[2],
      idJ3 : joueursEnvoyes[3],
      idJ4 : joueursEnvoyes[4],
      idJ5 : joueursEnvoyes[5],
      idJ6 : joueursEnvoyes[6],
      idJ7 : joueursEnvoyes[7],
      idJ8 : joueursEnvoyes[8],
      idJ9 : joueursEnvoyes[9],
                      }  
      });

      return this.http.post<InfoPartie>(url, params);

  }




  //--------------------------------
  //
  //--------------------------------
  getJoueurs(j:Joueur)
  {
    let url =urlServeur + "getJoueurs?idJ=" + j.id;

    return this.http.get<Joueur[]>(url);
  }

  //--------------------------------
  //
  //--------------------------------
  getPartiesDUnJoueur(j:Joueur)
  {
    let url = urlServeur + 'getPartiesDUnJoueur';
    //tr("joueur:"+j.id, true);

    
    const params = new HttpParams({
      fromObject: { idJ : j.id
                  }
      }); 
      return this.http.post<number[]>(url, params);   
  }

  //--------------------------------
  //
  //--------------------------------
  getInfoPartieEnCours(idPartie:number, j:Joueur)
  {
    tr("Info pour la partie " + idPartie);
    let url = urlServeur + 'getInfoPartieEnCours';
    const params = new HttpParams({
      fromObject: { idPartie : idPartie,
                    idJConnecte : j.id}
      });

    return this.http.post<InfoPartie>(url,params);                    
  }

   //--------------------------------
  //
  //--------------------------------
  televerseFichier(info:FormData)
  {
    let url = urlServeur + 'televerseAvatar';
    return this.http.post<string>(url, info);
  }  






}
