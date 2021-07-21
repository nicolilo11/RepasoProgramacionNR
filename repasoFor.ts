import { numerosParImpar } from './repasoif';

//**PUNTO 2**//
//**CONTINENTES**//

let africa:string[] = ["Sudafrica", "Nigeria", "Ghana", "Kenia", "Tanzania"];
let america:string[] = ["Argentina", "Uruguay", "Brasil", "Peru", "Ecuador"];
let asia:string[] = ["China", "Japon", "Indonesia", "India", "Tailandia"];
let europa:string[] = ["Alemania", "Italia", "Francia", "Reino Unido", "Paises Bajos"];
let oceania:string[] = ["Australia", "Nueva Zelanda", "Fiyi", "Samoa", "Palaos"];

let continentes:string[][] = [africa, america, asia, europa, oceania];
let continentesInd:string[] = ["Africa", "America", "Asia", "Europa", "Oceania"];

function paisesEnContinente(pais:string)
{
    for (let continente in continentes)
    {
        for(let x = 0; x < continentes[continente].length; x++)
        {
            if (continentes[continente][x] == pais)
            {
                console.log("CONTINENTE DE PAISES");
                console.log(continentesInd[continente] + "\n") ;
            }
        }
    }
}
paisesEnContinente("China");

//**PUNTO 3**//
//**NUMEROS IMPARES**//

function numerosImpares(n:number)
{
    let numerosImpares:number[] = new Array();

    for(let i = 0; i <= n; i++)
    {
        if(i % 2 != 0)
        {
            numerosImpares.push(i);
        }
    }
    console.log("NUMEROS IMPARES");
    console.log(numerosImpares + "\n");
}
numerosImpares(7);

//**PUNTO 4**//
//**ARRAY REVERTIDO**//

function arrayRevertido(x:any[])
{
    return "Este es tu array revertido " + x.reverse();
}
console.log("ARRAY REVERTIDO");
console.log(arrayRevertido(["Carlos", 2, "Pepita", 4]) + "\n");

//**PUNTO 5**//
//**COLORES EN EL ARCOIRIS**//

let arcoiris:string[] = ["Rojo", "Naranja", "Amarillo", "Verde", "Azul", "Índigo", "Violeta"];

function coloresArcoiris(x:string[])
{
    for(let i = 0; i < x.length; i++)
    {
        if (arcoiris.includes(x[i]))
        {
            console.log(x[i]);
        }
    }
}
console.log("COLORES DEL ARCOIRIS");
coloresArcoiris(["Rojo", "Violeta", "Turquesa", "Verde", "Azul", "Rosa" ])

//**PUNTO 8**//
//**SUMA DE CARACTERES DE UN ARRAY**//

function sumaDeCaracteres(arr:string[])
{   
    let numeroCaracteres:number = 0;
    for(let i = 0; i < arr.length; i++)
    {
        numeroCaracteres += arr[i].length;        
    }
    return numeroCaracteres;
}
console.log("\n" + "LA SUMA DE LOS CARACTERES DE ESTE ARRAY");
console.log(sumaDeCaracteres(["Carlos", "Nico", "Arturo", "Hermenegilda"]) + "\n");


//**PUNTO 10**//
//**PAR O IMPAR SUMA DE CARACTERES**//

let arr1:string[] = ["Casa", "Coche", "Ciudad", "Cesta"];
let arr2:string[] = ["Barco", "Baca", "Bicicleta", "Balon", "Bisisesto", "Brasil"];
let arr3:string[] = ["Venezuela", "Veneno", "Voltaje"];

let arrDeArr:string[][] = [arr1,arr2,arr3];

function caracteresDeArrays(arr:string[][])
{   
    let sumaDeCaracteresArray:number = 0;
    for(let i = 0; i < arrDeArr.length; i++)
    {
        sumaDeCaracteresArray += sumaDeCaracteres(arrDeArr[i]);
    }
    console.log("SUMA DE CARACTERES DE ARRAYS DADOS");
    numerosParImpar(sumaDeCaracteresArray) ;
}

caracteresDeArrays([arr1, arr2, arr3]);