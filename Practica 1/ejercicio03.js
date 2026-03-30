// 3. Crear una función que reciba un arreglo de números y devuelva en un objeto a los pares e impares: 
// let obj = miFuncion([1,2,3,4,5]) 
// console.log(obj) // { pares: [2,4], impares: [1,3,5]} 

const paresImpares = (numeros) => {
    let obj = {par: [], impar:[]};
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 == 0){
            obj.par.push(numeros[i]);
        }else{
            obj.impar.push(numeros[i]);
        }
    }
    return obj;
}

let obj = paresImpares([1,2,3,4,5]);
console.log(obj);