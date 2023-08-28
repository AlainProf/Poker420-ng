
export function tr(msg:string, dial:boolean = false, conso:boolean=true)
{
    if (dial)
       alert(msg);
    if (conso)
       console.log(msg);
}


export const urlServeur = "http://localhost/poker420-sf/public/index.php/";