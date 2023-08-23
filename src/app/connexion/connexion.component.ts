import { Component } from '@angular/core';
import { tr } from './../util';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent {


  creationCompte()
  {
    tr("Création d'un compte");
  }

  connexion()
  {
    tr("Connexion");
  }

}
