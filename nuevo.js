var http = require('http');
fs = require('fs');

var inicio = fs.readFileSync('./inicio.html');
var nosotros = fs.readFileSync('./nosotros.html');
var servicio = fs.readFileSync('./servicios.html');
var catalogo = fs.readFileSync('./catalogo.html');
var contacto = fs.readFileSync('./contacto.html');

const server = http.createServer((req, res)=>{
    var url = req.url;

    if (url === '/'){
        res.write(inicio)
    }
    else if(url === '/nosotros'){
        res.write(nosotros)
    }
    else if(url === '/servicio'){
        res.write(servicio)
    }
    else if(url === '/catalogo'){
        res.write(catalogo)
    }
    else if(url === '/contacto'){
        res.write(contacto)
    }
    else if(url === '/enviar'){
        console.log('Correo exitoso')
        res.writeHead(302, { 'Location': 'http://localhost:8080/'});  
    }
    else{
        res.write('Pagina no encontrada')
    }
    res.end();
});

server.listen(8080);