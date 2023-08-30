import { Component, EventEmitter, Output } from '@angular/core';
import { Joueur } from './../modele/joueur';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent {

  visible=false;

  joueurConnecte = new Joueur();

  @Output() quitterAccueil = new EventEmitter<Joueur>();


  quitter()
  {
    this.visible=false;

    this.quitterAccueil.emit(this.joueurConnecte);

  }

  onConnexionReussie(j:Joueur)
  {
    this.joueurConnecte = j;
    this.visible=true;
  }

}
