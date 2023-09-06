import { Component } from '@angular/core';
import { Joueur } from '../modele/joueur';
import { tr } from '../util';
import { Poker420Service } from '../poker420.service';


@Component({
  selector: 'app-table-de-jeu',
  templateUrl: './table-de-jeu.component.html',
  styleUrls: ['./table-de-jeu.component.css']
})
export class TableDeJeuComponent {


  //--------------------------------------
  //
  //--------------------------------------
  constructor(private pk420Srv:Poker420Service)
  {


  }


  //--------------------------------------
  //
  //--------------------------------------
  onDemarrerPartie(lesJoueurs:Joueur[])
  {
      tr("demarrer un p avec " + lesJoueurs.length + " joueurs", true);
      this.pk420Srv.creationPartie(lesJoueurs).subscribe(
        infPar => {
          tr("Partie créée allez voir la BD", true);

        }
      )


  }

}


