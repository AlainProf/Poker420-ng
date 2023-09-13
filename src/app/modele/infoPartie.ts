import {InfoJoueur } from './infoJoueur';
export class InfoPartie
{
    id:number=0;
    debut:string = '';
    joueurs:InfoJoueur[] = new Array();
    brasse=0;
    bouton=0;
    etape="PRE_FLOP";
    prochain=2;
    
    fin:string='';
    idGagnant=0;
    /*f0_v = 0;
    f0_s = 0;
    f1_v = 0;
    f1_s = 0;
    f2_v = 0;
    f2_s = 0;
    t_v = 0;
    t_s = 0;
    r_v = 0;
    r_s = 0;*/
}
