// 2. Crear una función que invierta el orden de las palabras en una frase. 
// let cad = miFuncion(“abcd”)
// console.log(obj) // dcba 

function invertirFrase(palabra){
    let invertido = "";
    for (let i = 0; i < palabra.length; i++){
        invertido = palabra[i] + invertido;
    }
    return invertido;
}

let cad = invertirFrase("abcd");
console.log(cad);