//5. Crear una función que determine si una cadena es palíndromo (se lee igual al derecho y al revés). 
//let band = miFuncion(“oruro”) console.log(band) // true 
// let band = miFuncion(“hola”) console.log(band) // false 

const verifica = (palabra) => {
    let invertido = "";
    for (let i = 0; i < palabra.length; i++){
        invertido = palabra[i] + invertido;
    }
    return palabra == invertido;

}
let band = verifica("oruro");
console.log(band);
band = verifica("hola");
console.log(band);