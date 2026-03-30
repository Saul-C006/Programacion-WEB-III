//14. Proporcione un ejemplo para convertir una promesa en un callback. 
function promesa() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (true){
                resolve("Promesa resuelta");
            }else{
                reject("Promesa rechazada");
            }
        }, 2000);
    }); 
}

function promesaACallback(promesa, callback) {
    promesa.then(resultado => {
        callback(null, resultado);  
    }).catch(error => {
        callback(error, null);  
    });
}

promesaACallback(promesa(), (error, resultado) => {
    if (error) {
        console.error("Error:", error);
    } else {
        console.log("Resultado:", resultado);
    }
});

