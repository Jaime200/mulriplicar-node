// requireds
const fs = require('fs');
//tipos
// const fs = require('express'); -->es un  paquete que se instala, es decir que no son nativos
// const fs = require('./fs'); -->archivos que nosotros mismos escribimos

let base = 5;

//const data = new Uint8Array(Buffer.from('Hola mundo.js'));
let data ="";
for(let i= 1; i<=10;i++){
    //console.log(`${base} * ${i} = ${base*i}`)    
    data += `${base} * ${i} = ${base*i} \n`
}


fs.writeFile(`Tablas/tabla-${base}.txt`, data, (err) => {

  if (err) throw err;

  console.log(`El archivo tabla-${base} ha sido creado`);
});