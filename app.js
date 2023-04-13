
const { crearArchivo } = require('./helpers/multiplicar');
const argv  = require('./config/yargs');


console.log(process.argv);
console.log('yargs', argv.base);
console.log('yargs', argv);

//const base = 5;


crearArchivo(argv.base, argv.listar, argv.limite)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .then(err => console.log(err));

