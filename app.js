const {crearArchivo} = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;


let comando = argv._[0];

 let basefrom = argv.from;
 let baseto = argv.to;
// let baseto = argv.to;

switch(comando){
    case 'listar':
        console.log(basefrom, baseto);
    break;
    case 'crear':
        crearArchivo(basefrom, baseto)
        .then(archivo =>{
            console.log(`Archivo creado ${archivo}`.america);
        }).catch(err =>{
            console.log(err);
        });
    break;
}
