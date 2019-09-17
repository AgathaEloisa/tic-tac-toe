// usar 'do wile' para delimitar la cantidad de palabras que pueden usar.
// No usar length :(
let sentence = prompt('Ingresa aquí la frase que quieras')

let spaceCounter = 0;
let counter = 0;
let letter = [];
for(let i = 0; i < sentence.length; i++){
    //    Muestra en consola los caracteres uno a uno, pero aún no separados.
    letter.push(sentence[i].toUpperCase());
   if(sentence[i] === ' '){
    //    Cuenta espacios.
        spaceCounter++;
   } else if (sentence[i] !== ' '){
    //    cuenta caracteres que no son espacios.
        counter++;
   }
}

console.log(letter);
console.log(counter);
console.log(spaceCounter);
// Una función que imprima todos los caracteres de un string, cada uno en una línea separada, en mayúscula.
// Una función que cuente el número de caracteres de un string (¡sin utilizar .length!)
// Una función que cuente el número de espacios de un string
