//12. Proporcione un ejemplo concreto donde el anidamiento de callbacks se puede reescribir mejor con async/await haciendo el código más limpio y mantenible. 

//anidamiento de callbacks
function leerArchivo(callback) {
    setTimeout(() => {
        console.log("Archivo leído.");
        callback("Contenido del archivo");  
    }, 1000);
}

function procesarDatos(datos, callback) {
    setTimeout(() => {
        console.log("Datos procesados.");
        callback(datos + " procesados");
    }, 1000);
}

function guardarDatos(datos, callback) {
    setTimeout(() => {
        console.log("Datos guardados.");
        callback("Guardado exitoso");
    }, 1000);
}

leerArchivo((datos) => {
    procesarDatos(datos, (datosProcesados) => {
        guardarDatos(datosProcesados, (resultado) => {
            console.log(resultado);
        });
    });
});

//reescrito con async/await
function leerArchivoAsync() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Archivo leído.");
            resolve("Contenido del archivo");
        }, 1000);
    });
}

function procesarDatosAsync(datos) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Datos procesados.");
            resolve(datos + " procesados");
        }, 1000);
    });
}

function guardarDatosAsync(datos) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Datos guardados.");
            resolve("Guardado exitoso");
        }, 1000);
    });
}

async function ejecutar() {
    try {
        const datos = await leerArchivoAsync();
        const datosProcesados = await procesarDatosAsync(datos);
        const resultado = await guardarDatosAsync(datosProcesados);
        console.log(resultado);
    } catch (error) {
        console.error("Error:", error);
    }
}

ejecutar(); 