import { Component, Output, EventEmitter } from '@angular/core';
import { Joueur, JoueurCandidat} from './../modele/joueur';
import { tr} from './../util';
import { Poker420Service } from '../poker420.service';

@Component({
  selector: 'app-creation-partie',
  templateUrl: './creation-partie.component.html',
  styleUrls: ['./creation-partie.component.css']
})
export class CreationPartieComponent {

  visible=false;
  tabJoueurs = new Array();
  joueur:Joueur = new JoueurCandidat();
  

  @Output() demarrerPartie=new EventEmitter<Joueur[]>();
  @Output() quitterCreationPartie= new EventEmitter<Joueur>();

  //--------------------------------------
  //
  //--------------------------------------
  constructor(private pk420Srv:Poker420Service)
  {}


  //--------------------------------------
  //
  //--------------------------------------
  onOuvrirCreationPartie(j:Joueur)
  {
    //tr("Création de partie", true);
    this.visible= true;
    this.joueur = j;
    this.afficherJoueurs();
  }

  //--------------------------------------
  //
  //--------------------------------------
  afficherJoueurs()
  {
    this.pk420Srv.getJoueurs(this.joueur.id).subscribe(
      tabJoueurs => {
         this.tabJoueurs = tabJoueurs;

         //tr("Il y a " + tabJoueurs.length + " joueurs", true);

      }
    )
  }

  //--------------------------------------
  //
  //--------------------------------------

  basculeJoueur(id:number)
  {
    tr("bascule:" + id);
    for(let i=0; i< this.tabJoueurs.length; i++)
    {
      if (this.tabJoueurs[i].id == id )
      {
        this.tabJoueurs[i].choisi = !this.tabJoueurs[i].choisi;
      }
    }
  }

  //--------------------------------------
  //
  //--------------------------------------
  accepterJoueurs()
  {
    let tabJoueursSel:Joueur[] = Array();
    let nbJoueurs = 1;
    let onYVa = true;
    let msg = "";

    tabJoueursSel.push(this.joueur);

    for(let i=0; i<this.tabJoueurs.length; i++)
    {
      if (this.tabJoueurs[i].choisi)
      {
        nbJoueurs++;
        tabJoueursSel.push(this.tabJoueurs[i]);
      }
    }

    if (nbJoueurs > 10)
    {
      msg = "Erreur vous dépassez 10 joueurs";
      onYVa = false;
    }

    if (nbJoueurs < 2)
    {
      msg = "Erreur vous ne pouvez jouer seul";
      onYVa = false;
    }

    if (onYVa)
    {
      this.visible=false;
      this.demarrerPartie.emit(tabJoueursSel);
    }
    else
    {
      tr(msg, true);
    }



  }
  //--------------------------------------
  //
  //--------------------------------------
  retourAccueil()
  {
    this.visible = false;
    this.quitterCreationPartie.emit(this.joueur);


  }

}

