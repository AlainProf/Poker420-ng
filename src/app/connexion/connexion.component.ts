import { Component, EventEmitter, Output } from '@angular/core';
import { tr } from './../util';
import { Joueur } from './../modele/joueur';
import { Poker420Service } from '../poker420.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent {

  connexionVisible=true;
  creerCompteVisible=false;


  joueurConnecte:Joueur = new Joueur();
  joueurCandidat:Joueur = new Joueur();
  confirmation="";

  @Output() connexionReussie = new EventEmitter<Joueur>();

  constructor(private pk420Srv:Poker420Service)
  {}

  //--------------------------------
  //
  //--------------------------------
  creationCompte()
  {
     this.connexionVisible=false;
     this.creerCompteVisible=true;   
  }

  //--------------------------------
  //
  //--------------------------------
  connexion()
  {
    tr("Connexion de " + this.joueurCandidat.nom);

    this.triche();

    if (this.joueurCandidat.nom.length > 0)
    {
      this.pk420Srv.connexion(this.joueurCandidat).subscribe(
        joueurConnec => {
          tr("Joueur connexté:" + joueurConnec.nom);
          this.joueurConnecte = joueurConnec;
          this.connexionReussie.emit(this.joueurConnecte);
        }
      )
    }
  }

  //--------------------------------
  //
  //--------------------------------
  triche()
  {
    if (this.joueurCandidat.nom.length == 0)
    {
        this.joueurCandidat.nom = 'ben'
        this.joueurCandidat.motDePasse='11';
    }
  } 

  //--------------------------------
  //
  //--------------------------------
  annulerCreationCompte()
  {
     this.connexionVisible=true;
     this.creerCompteVisible=false;   

  }

  //--------------------------------
  //
  //--------------------------------
  validerCreationCompte()
  {
    tr("Validation de " + this.joueurCandidat.nom)

    if (this.infoValides())
    {
        this.pk420Srv.creationJoueur(this.joueurCandidat).subscribe(
          joueurCree => {
            tr("Joueur créé:" + joueurCree.nom, true);
            this.joueurConnecte = joueurCree;
            this.connexionReussie.emit(this.joueurConnecte);
          }
        )
    }

    return true;
  }

  //--------------------------------
  //
  //--------------------------------
  infoValides()
  {
    return true;
  }

  //--------------------------------
  //
  //--------------------------------
  afficherTousLesJoueurs()
  {
    this.pk420Srv.getJoueurs().subscribe(
      tabJ => {
        tr(" il y a " + tabJ.length + " joeuurs ds la BD", true);
      }
    );

  }

}
