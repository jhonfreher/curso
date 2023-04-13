
const colors = require('colors');

const crearArchivo = async (base = 5, listar = false, hasta = 20) => {

    console.log('=================='.green);
    console.log(`    Tabla del: ${ colors.blue( base)}`);
    console.log('==================');

    let salida = '';

    try {
        const fs = require('fs');

        for (let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base * i}\n`
        }

        if (listar) {
            console.log(salida);
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);


        return `tabla-${base}.txt creado`;
    } catch (err) {
        throw err;
    }



}

module.exports = {
    crearArchivo
}