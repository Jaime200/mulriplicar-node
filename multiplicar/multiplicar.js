const fs = require('fs');

listarTabla = (base, limite) =>{
    return new Promise  ((resolve,reject)=>{
        
        
        if(!Number(base)){
            reject(`El valor ${base} no es un numero`)
            return;
        }

        if(!Number(limite)){
            reject(`El valor ${limite} no es un numero`)
        }
        let data ="";
        for(let i= 1; i<=limite;i++){
            //console.log(`${base} * ${i} = ${base*i}`)    
            data += `${base} * ${i} = ${base*i} \n`
        }
        resolve(data);
    })
}


crearArchivo = (base, limite) => {
    return new Promise ( (resolve, reject) =>{

        if (!Number(base)){
            reject(`El valor ${base} no es un número`)
          return;
        }

        if (!Number(limite)){
            reject(`El valor ${limite} no es un número`)
          return;
        }
        let data ="";
        for(let i= 1; i<=limite;i++){
            //console.log(`${base} * ${i} = ${base*i}`)    
            data += `${base} * ${i} = ${base*i} \n`
        }
        
        
        fs.writeFile(`Tablas/tabla-${base}.txt`, data, (err) => {
        
          if (err) reject (err);
        else
            resolve (`tabla-${base}.txt`)
          //console.log(`El archivo tabla-${base} ha sido creado`);
        });
    })
}

module.exports = {
    crearArchivo,
    listarTabla
}
