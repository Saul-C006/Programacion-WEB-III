//8. Realizar un código para ejecutar una función callback después 2 segundos. 

const ejecutarCallback = (callback) => {
    console.log("Ejecutando función callback despues de 2 segundos...");
    setTimeout(() => {
        callback();
    }, 2000);
}

const callback = () => {
    console.log("Callback ejecutado correctamente");
}
ejecutarCallback(callback);