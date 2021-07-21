//**PUNTO 6**//
//**NUMERO PAR**//

function siHayNumeroPar(arr:number[])
{
    let index = 0;
    let numero:boolean = ((arr[index]+ 1) % 2 == 0)
    while (index < arr.length && (arr[index] % 2) != 0)
    {   
        index++;
    }
    console.log(numero); 
}
console.log("\n" + "NUMERO PAR DENTRO DE UN ARRAY");
siHayNumeroPar([1,3,6,7,8]);

//**PUNTO 7**//
//**NOMBRES COMENZADOS POR M**//

function arrayComenzadosM(arr:string[])
{
    let index:number = 0;
    let letraM:boolean = ((arr[index]+ 1).charAt(0) == "M")

    while (index < arr.length && (arr[index].charAt(0) == "M"))
    {
        index++;
    }
    return letraM;
    
}
console.log("\n" + "PALABRAS COMENZADAS POR M");
console.log(arrayComenzadosM(["Mariana", "Mario", "Martita"]));