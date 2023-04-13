const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe : "toma la tabla de multiplicar"
    })
    .check((argv) => {
        if (isNaN(argv.b)) {
            throw new Error('Argument check failed: filepath is not a readable file');
        }

        return true

    }).option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe : "lista la tabla de multiplicar"
    }).option('h', {
        alias: 'limite',
        type: 'number',
        default: 10,
        describe : "limite de la tabla"
    })
    .argv;

    module.exports = argv;