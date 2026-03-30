//1. Crear una función que cuente cuántas veces aparece cada vocal en un texto y devuelva el resultado en un objeto. 
//let obj = miFuncion(“euforia”) 
// console.log(obj) // { a: 1, e: 1, i: 1, o: 1, u: 1 } 

function  contarVocal(palabra){
    let obj = {a: 0, e: 0, i: 0, o: 0, u: 0};
    for (let i = 0; i < palabra.length; i++) {
        if (palabra[i] === 'a') {
            obj.a++;
        } else if (palabra[i] === 'e') {
            obj.e++;
        } else if (palabra[i] === 'i') {
            obj.i++;
        } else if (palabra[i] === 'o') {
            obj.o++;
        } else if (palabra[i] === 'u') {
            obj.u++;
        }
    }
    return obj;
}
let obj = contarVocal("palabra");

console.log(obj);