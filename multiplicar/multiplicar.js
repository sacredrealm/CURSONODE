const fs = require('fs');
var colors = require('colors');

let crearArchivo = (from, to) =>{
    return new Promise((resolve, reject)=>{ 

        if(!Number(from)){
            reject(`${from} no es un mumeritoS`);
            return;
        }

        
        let cadena = '';
        for(var i = from; i <= to; i++){
            for(var j = 1; j <= 20; j++){
                cadena += `${i} x ${j} = ${i * j}\n`;
            }
        }

        fs.writeFile('tablas/MENSAJE.txt', cadena, (err)=>{
            if(err) reject(err);
            else resolve("tablas/MENSAJE.txt");
        });
    });
}

module.exports = {
                    crearArchivo
                 }