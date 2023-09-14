
export function tr(msg:string, dial:boolean = false, conso:boolean=true)
{
    if (dial)
       alert(msg);
    if (conso)
       console.log(msg);
}


//------------------------------------
//
//------------------------------------
export function getURLAvatar(joueurId:number)
{
  // en ajoutant le param bidon du GET (random=) on force le refresh de l'image!
  //let urltmp = urlServeur + '../images/joueurs/' + joueurId + ".png" + '?random=' + Math.random(); 

  // en enlevant le param bidon du GET (random=) on enlève l'erreur de dév de la console du fureteur!
  let urltmp = urlServeur + '../images/joueurs/' + joueurId + ".png"; 
  return urltmp;
}

export const urlServeur = "http://localhost/poker420-sf/public/index.php/";

export const MAX_FICHIER_VOLUME:number = 500*1048;