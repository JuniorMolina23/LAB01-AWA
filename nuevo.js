var http = require('http');
fs = require('fs');

var inicio = fs.readFileSync('./Bienvenido.html');
var nosotros = fs.readFileSync('./nosotros.html');
var servicio = fs.readFileSync('./servicios.html');
var catalogo = fs.readFileSync('./catalogo.html');
var contacto = fs.readFileSync('./contacto.html');
var dataString = ''

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
        if(req.method =='GET'){
            res.writeHead(200,{'Content-Type':'text/html'})
        }
        if(req.method =='POST'){
            req
                .on('data',function(data){
                    dataString += data
                    res.end(contacto)
                })
                .on('end',function(){
                    var templateString = 'Los datos que esnviaste son:',dataString
                    console.log(templateString)
                    res.end(templateString)
                })
                
        }
        console.log('Correo exitoso')
        res.writeHead(302, { 'Location': 'http://localhost:8080/'});  
    }
    else{
        res.write('Pagina no encontrada')
    }
    res.end();
});

server.listen(8080);


