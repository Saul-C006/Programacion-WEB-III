//15. Proporcione un ejemplo para convertir un callback en una promesa. 

function ejemploCallback(callback) {
    setTimeout(() => {
        const exito = true; 
        if (exito) {
            callback(null, "Operación exitosa");
        } else {
            callback("Error en la operación", null);
        }
    }, 2000);
}
function callbackAPromesa(callback) {
    return new Promise((resolve, reject) => {
        callback((error, resultado) => {
            if (error) {
                reject(error);
            } else {
                resolve(resultado);
            }
        });
    });
}

callbackAPromesa(ejemploCallback)
    .then(resultado => {
        console.log("Resultado:", resultado); 
    })
    .catch(error => {
        console.error("Error:", error);
    });