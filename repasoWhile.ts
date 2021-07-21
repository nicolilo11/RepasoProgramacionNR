//**PUNTO 6**//
//**NUMERO PAR**//

function siHayNumeroPar(arr:number[])
{
    let index = 0;
    while (index < arr.length && (arr[index] % 2) != 0)
    {
        index++;
    }
    if(arr[index] % 2 == 0)
    {
        console.log(arr[index])
    }else
    {
        console.log("No tenes ningun numero par en tu array");  
    }
}
console.log("\n" + "NUMERO PAR DENTRO DE UN ARRAY");
siHayNumeroPar([1,3,6,7,8]);

//**PUNTO 7**//
//**NOMBRES COMENZADOS POR M**//

function arrayComenzadosM(arr:string[])
{
    let index:number = 0;
    let letraM:boolean = true;

    while (index < arr.length && letraM)
    {
        if(arr[index].charAt(0) != "m" && arr[index].charAt(0) != "M")
        {
            letraM = false
        }
        index++;
    }
    return letraM;
    
}
console.log("\n" + "PALABRAS COMENZADAS POR M");
console.log(arrayComenzadosM(["Mariana", "cario", "Martita"]));