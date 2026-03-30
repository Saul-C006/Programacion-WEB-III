//11. Proporcione un ejemplo concreto de encadenamiento de promesas. 
const promesa = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(5);
        }, 1000);
    });
}

promesa()
    .then (num => {
        console.log(`El número es: ${num}`);
        return num * 5;
    }).then (num => {
        console.log(`El número multiplicado por 5 es: ${num}`);
        return (num/5) * 10;
    }).then (num => {
        console.log(`El número multiplicado por 10 es: ${num}`);
    });
