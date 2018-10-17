
const opciones = {
    from: {
        demand: true,
        alias: 'b'
    },
    to: {
        alias: 'f',
        default: 20
    }
}


const argv = require('yargs')
.command('listar', 'Imprime en consola cosas', opciones)
.command('crear', 'Crea el archivo fisico en consola cosas', opciones).argv

module.exports = {
    argv
}