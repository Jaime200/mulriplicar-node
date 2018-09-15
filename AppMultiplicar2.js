
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const { argv } = require('./config/yargs')
const colors  = require('colors/safe')

let comando = argv._[0]

switch(comando){
    case 'listar': 
    listarTabla(argv.base, argv.limite)
        .then(listar => console.log(`${listar}`))
        .catch(err => console.log(err))
        console.log(`listar`)
        break;
    case 'crear':
                crearArchivo(argv.base,argv.limite)
                .then(archivo => console.log(`Archivo creado`, colors.green(archivo)))
                .catch(err => console.log(err))
           
        break;
    default: console.log(`comando no reconocido`.red)

}

// let argv = process.argv;
// let parametro = argv[2];
// console.log(`El parametro es ${parametro}`);
// let base = parametro.split("=");

// console.log(`La base ${base[1]}`);

// crearArchivo(base[1])
//     .then(archivo => console.log(`Archivo creado ${archivo}`))
//     .catch(err => console.log(err))
// console.log(process.argv)