// 4. Crear una función que reciba un arreglo de números y devuelva el número mayor y el menor, en un objeto. 
// let obj = miFuncion([3,1,5,4,2]) 
// console.log(obj) // { mayor: 5, menor: 1 } 

const mayorMenor = (numeros) => {
    let obj = {mayor:numeros[0], menor:numeros[0]};
    let may = -1;
    let men = numeros[0];
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > obj.mayor) {
            obj.mayor = numeros[i];
        }
        if (numeros[i] < obj.menor) {
            obj.menor = numeros[i];
        }
    }
    return obj;
}

let obj = mayorMenor([3,1,5,4,2]);
console.log(obj);