//**PUNTO 1**//
//**SIGNOS DEL ZODIACO**//

function signoZodiacal(mes:number, dia:number)
{
    let fechasSignos:number[] = [20,19,20,20,20,21,22,22,21,22,21,21];
    let signos:string[] = ["Capricornio", "Acuario", "Piscis", "Aries", "Tauro", "Geminis", "Cancer", "Leo", "Virgo",
                  "Libra", "Escorpio", "Sagitario"];
    let indiceMes:number = mes - 1;
    let indiceSignoZodiaco:number;

    if (dia <= fechasSignos[indiceMes])
    {
        indiceSignoZodiaco = indiceMes;
    }else
    {
       indiceSignoZodiaco = (indiceMes + 1) % 12;
    }
    return "Tu signo del zodiaco es: " + signos[indiceSignoZodiaco] + "\n";
}
console.log("SIGNOS DEL ZODIACO");
console.log(signoZodiacal(10,23))


//**PUNTO 9**//
//**ENCONTRAR NUMEROS**//

export function numerosParImpar(n:number)
{
    if (n % 2 == 0)
    {
        console.log("El numero es par" + "\n");   
    }else
    {
        console.log("El numero es impar" + "\n");
    }
}
console.log("NUMEROS PARES O IMPARES");
numerosParImpar(9);