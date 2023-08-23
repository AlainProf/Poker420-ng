
export function tr(msg:string, dial:boolean = false, conso:boolean=true)
{
    if (dial)
       alert(msg);
    if (conso)
       console.log(msg);
}