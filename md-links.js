"use strict"
const fs = require('fs');
const fetch = require('node-fetch');
//const path = require('path');
const mdLink =require('./md-links');
const command = process.argv[2]//te toma desde la posicion dos 
const markdownLinkExtractor = require('markdown-link-extractor');
//const FileHound = require('filehound');// libreria que busca dentro de los archivos 

const readFile= (file, type) =>{ // esta crea la funcion leer archivo 
  return new Promise ((resolve,reject)=>{// retorna una promesa que puede ser resuelta o no 
   fs.readFile(file, type, (error,contenido)=>{//usar fs.readFile,necesita dos condiciones 
    if (error){
        reject(error)
    }else{
        resolve(contenido)
    }
});
});
}
//llamo a la funcion 
readFile(command,"utf-8")// vuelvo a llamar a la const creada y  le paso el archivo
   .then (res=>{
    //console.log(res);
    const links = markdownLinkExtractor(res)
    links.forEach(function (link) {
        fetch(link).then((res)=>{ //respuesta
            console.log(' ' + res.url + '  ' + res.status + ' ' + res.statusText); // me entrega la url el status status text
    
        })
        .catch(error => {
            console.log(error.message)
        })
    });
})
exports.readFile = readFile;
//const validateLinks = (href) =>{
   // return new Promise ((resolve,reject)=>{
      //  fetch(href).then((res)=>{
        //    console.log(element + " " + res.status + " " + res.status.Text);
       // })
       // .catch (error =>{
         //   console.log(error.message)
        //})
   // })
//}
//validateLinks()
//.then(res=>{
  //      console.log(res)
//})
//.catch(err=>{
    //    console.log(err)
//})
// valida 
/*
links.forEach(function (element) {// lo recorre  
fetch(element).then((res)=>{ // fetch toma el elemnto que toma
    console.log(res.url + " " + res.status + " " + res.statusText); // te toma la url un espacio el numero 200 y si esta ok el lick
})
.catch (error=>{

 console.log(error.message);
})
});

exports.links = links;/*


//links.forEach(function (element) {// lo recorre  
//fetch(element).then((res)=>{ // fetch toma el elemnto que toma
    //console.log(res.url + " " + res.status + " " + res.statusText); // te toma la url un espacio el numero 200 y si esta ok el lick
//})
//.catch (error=>{

//extrae archivos 

//exports.links = links;


//const fs = require('fs');
//const path = require('path');
//const dir = "C:\\Users\\Luci\\Desktop\\laboratoria";

//const links = markdownLinkChecker(markdown);

//links.forEach(function (link) {
 //console.log(link);
//});

//extrae archivos md 
//const fs = require('fs');
//const path = require('path');
//const dir = "C:\\Users\\Luci\\Desktop\\laboratoria";
// Check write permission
/* try {
    fs.accessSync(dir, fs.constants.W_OK);
    console.log('can write %s', dir);
}
catch (err) {
    console.log("%s doesn't exist", dir);
} */

/*let firstArray = [];
let answer = fs.readdir(dir, (err, files) => {
    console.log("dir:", dir);
    console.log("files:", files);
    files.forEach(file => {
        if (path.extname(file) == '.md') {
            firstArray.push(file);
        };
    });
    console.log(firstArray);
});*/
//--------------------------------------
//extrae archivos md

/*
const files = FileHound.create()
 .paths('C:\Users\Luci\Desktop\laboratoria') // ruta donde quiero que busque los archivos
 .ext('md')// tipo de archivo que quiero que busque
 .find();

files.then(res =>{
    console.log(res);
});*/
//-------------------------------------------------------
/*
//extrae archivos md
const FileHound = require('filehound');

const files = FileHound.create()
 .paths('C:\\Users\\Luci\\Desktop\\laboratoria\\SCL008-md-links')// ruta donde quiero que busque los archivos
 .ext('md')// tipo de archivo que quiero que busque
 .find();

files.then(console.log);*/

