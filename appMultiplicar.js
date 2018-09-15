//const multiplicar = require('./multiplicar/multiplicar')
const {crearArchivo} = require('./multiplicar/multiplicar')
let base = 'N'

// multiplicar.crearArchivo(base)
// console.log(multiplicar)

// multiplicar.crearArchivo(base)
//      .then(Archivo => console.log(`Archivo creado`))
    
crearArchivo(base)
     .then(Archivo => console.log(`Archivo creado`))
     .catch(err => console.log(`Error ${err}`))
    