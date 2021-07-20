//**PUNTO 1**//
//**SIGNOS DEL ZODIACO**//
function signoZodiacal(mes, dia) {
    var fechasSignos = [20, 19, 20, 20, 20, 21, 22, 22, 21, 22, 21, 21];
    var signos = ["Capricornio", "Acuario", "Piscis", "Aries", "Tauro", "Geminis", "Cancer", "Leo", "Virgo",
        "Libra", "Escorpio", "Sagitario"];
    var indiceMes = mes - 1;
    var indiceSignoZodiaco;
    if (dia <= fechasSignos[indiceMes]) {
        indiceSignoZodiaco = indiceMes;
    }
    else {
        indiceSignoZodiaco = (indiceMes + 1) % 12;
    }
    return "Tu signo del zodiaco es: " + signos[indiceSignoZodiaco] + "\n";
}
console.log("SIGNOS DEL ZODIACO");
console.log(signoZodiacal(10, 23));
//**PUNTO 2**//
//**CONTINENTES**//
var africa = ["Sudafrica", "Nigeria", "Ghana", "Kenia", "Tanzania"];
var america = ["Argentina", "Uruguay", "Brasil", "Peru", "Ecuador"];
var asia = ["China", "Japon", "Indonesia", "India", "Tailandia"];
var europa = ["Alemania", "Italia", "Francia", "Reino Unido", "Paises Bajos"];
var oceania = ["Australia", "Nueva Zelanda", "Fiyi", "Samoa", "Palaos"];
var continentes = [africa, america, asia, europa, oceania];
var continentesInd = ["Africa", "America", "Asia", "Europa", "Oceania"];
function paisesEnContinente(pais) {
    for (var continente in continentes) {
        for (var x = 0; x < continentes[continente].length; x++) {
            if (continentes[continente][x] == pais) {
                console.log("CONTINENTE DE PAISES");
                console.log(continentesInd[continente] + "\n");
            }
        }
    }
}
paisesEnContinente("China");
//**PUNTO 3**//
//**NUMEROS IMPARES**//
function numerosImpares(n) {
    var numerosImpares = new Array();
    for (var i = 0; i <= n; i++) {
        if (i % 2 != 0) {
            numerosImpares.push(i);
        }
    }
    console.log("NUMEROS IMPARES");
    console.log(numerosImpares + "\n");
}
numerosImpares(7);
//**PUNTO 4**//
//**ARRAY REVERTIDO**//
function arrayRevertido(x) {
    return "Este es tu array revertido " + x.reverse();
}
console.log("ARRAY REVERTIDO");
console.log(arrayRevertido(["Carlos", 2, "Pepita", 4]) + "\n");
//**PUNTO 5**//
//**COLORES EN EL ARCOIRIS**//
var arcoiris = ["Rojo", "Naranja", "Amarillo", "Verde", "Azul", "Índigo", "Violeta"];
function coloresArcoiris(x) {
    for (var i = 0; i < x.length; i++) {
        if (arcoiris.includes(x[i])) {
            console.log(x[i]);
        }
    }
}
console.log("COLORES DEL ARCOIRIS");
coloresArcoiris(["Rojo", "Violeta", "Turquesa", "Verde", "Azul", "Rosa"]);
//**PUNTO 6**//
//**NUMERO PAR**//
function siHayNumeroPar(arr) {
    var index = 0;
    while (index < arr.length && (arr[index] % 2) != 0) {
        index++;
    }
    if (arr[index] % 2 == 0) {
        console.log(arr[index]);
    }
    else {
        console.log("No tenes ningun numero par en tu array");
    }
}
console.log("\n" + "NUMERO PAR DENTRO DE UN ARRAY");
siHayNumeroPar([1, 3, 6, 7, 8]);
//**PUNTO 7**//
//**NOMBRES COMENZADOS POR M**//
function arrayComenzadosM(arr) {
    var index = 0;
    var letraM = true;
    while (index < arr.length && letraM) {
        if (arr[index].charAt(0) != "m" && arr[index].charAt(0) != "M") {
            letraM = false;
        }
        index++;
    }
    return letraM;
}
console.log("\n" + "PALABRAS COMENZADAS POR M");
console.log(arrayComenzadosM(["Mariana", "cario", "Martita"]));
//**PUNTO 8**//
//**SUMA DE CARACTERES DE UN ARRAY**//
function sumaDeCaracteres(arr) {
    var numeroCaracteres = 0;
    for (var i = 0; i < arr.length; i++) {
        numeroCaracteres += arr[i].length;
    }
    return numeroCaracteres;
}
console.log("\n" + "LA SUMA DE LOS CARACTERES DE ESTE ARRAY");
console.log(sumaDeCaracteres(["Carlos", "Nico", "Arturo", "Hermenegilda"]) + "\n");
function numerosParImpar(n) {
    if (n % 2 == 0) {
        console.log("El numero es par" + "\n");
    }
    else {
        console.log("El numero es impar" + "\n");
    }
}
console.log("NUMEROS PARES O IMPARES");
numerosParImpar(9);
var arr1 = ["Casa", "Coche", "Ciudad", "Cesta"];
var arr2 = ["Barco", "Baca", "Bicicleta", "Balon", "Bisisesto", "Brasil"];
var arr3 = ["Venezuela", "Veneno", "Voltaje"];
var arrDeArr = [arr1, arr2, arr3];
function caracteresDeArrays(arr) {
    var sumaDeCaracteresArray = 0;
    for (var i = 0; i < arrDeArr.length; i++) {
        sumaDeCaracteresArray += sumaDeCaracteres(arrDeArr[i]);
    }
    console.log("SUMA DE CARACTERES DE ARRAYS DADOS");
    numerosParImpar(sumaDeCaracteresArray);
}
caracteresDeArrays([arr1, arr2, arr3]);
