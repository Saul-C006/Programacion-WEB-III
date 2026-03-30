// 16. 

function obtenerDatos() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const datos = { nombre: "Saul", edad: 19 };
            resolve(datos);
        }, 2000);
    });
}

function procesarDatos() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const mensaje = "Datos procesados correctamente";
            resolve(mensaje);
        }, 1000);
    });
}

function ejecutarPromesas() {
    obtenerDatos()
        .then(datos => {
            console.log("Datos obtenidos:", datos);
            return procesarDatos();
        })
        .then(mensaje => {
            console.log(mensaje);
        })
        .catch(error => {
            console.error("Error:", error);
        });
}

async function ejecutarAsyncAwait() {
    try {
        const datos = await obtenerDatos();
        console.log("Datos obtenidos:", datos);
        const mensaje = await procesarDatos();
        console.log(mensaje);
    } catch (error) {
        console.error("Error:", error);
    }   
}

ejecutarPromesas();

setTimeout(() => {
    ejecutarAsyncAwait();
}, 2000);