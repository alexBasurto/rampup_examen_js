// Ejercicio 1:
function contarLetra(texto, letra) {
    texto = texto.toLowerCase();
    let numVeces = 0;
    for (let i = 0; i < texto.length; i++){
        if (texto[i] == letra) {
            numVeces++;
        }
    }
    return numVeces;
}

texto1 = 'gol en el minuto 90';
letra1 = 'o';

texto2 = 'amanece que no es poco';
letra2 = 'a';

texto3 = 'pAtatas bravas a la plancha a la mañana';
letra3 = 'a';

texto4 = 'estrEmece vertE de EsE modo';
letra4 = 'e';

//llamamos función (Pruebas en consola).
console.log("Prueba 1:" + texto1 + ". LETRA " + letra1);
console.log(contarLetra(texto1, letra1)); //2
console.log("Prueba 2:" + texto2 + ". LETRA " + letra2);
console.log(contarLetra(texto2, letra2));
console.log("Prueba 3:" + texto3 + ". LETRA " + letra3);
console.log(contarLetra(texto3, letra3));
console.log("Prueba 4:" + texto4 + ". LETRA " + letra4);
console.log(contarLetra(texto4, letra4));


//Ejercicio 2
function impares50(num){
    for (let i = 0; i < 50; i++){
        if (num%2 != 0) {
            console.log(num);
        }
        num++;
    }
}

//llamamos función (Pruebas en consola).
console.log("Pruebas impares 50.");
let numInicio = 300;
console.log(impares50(numInicio));



//Ejercicio 2 solución alternativa
function imparesAlternativa(num){
    let meta = num + 50;
    for (num; num < meta; num++){
        if (num%2 != 0) {
            console.log(num);
        }
    }
}

//llamamos función (Pruebas en consola).
console.log("Pruebas impares 50. Solución alternativa");
let numInicioAlt = 152;
console.log(imparesAlternativa(numInicioAlt));