#!/usr/bin/env node 

//con esto de arriba identifico que voy a trabajar con node
const mdLinks = require('./md-links');// para el require no es necesario poner la extencion .js 
//console.log(mdLinks.suma(2,2));
//console.log(mdLinks.multi(2,2));

// esto es para leer el readme.md

//const fs = require('fs'); //fs es una dependencia de node.js y tiene como metodo leer archivos fs.readFile
//fs.readFile('./readme.md','utf-8', (err, data) => {  //a eso le pasamos parametros como *'./README.md',* eso es la ruta de que va a leer/*'utf-8'* eso es para que nos muestré las letras por que si no lo ponemos y corremos el comando node index.js nos arroja puros numeros
//if (err) throw err;
//console.log(data);
//});

const fs = require('fs');
const markdownLinkExtractor = require('markdown-link-extractor');

const markdown = fs.readFileSync('readme.md').toString();

const links = markdownLinkExtractor(markdown);

links.forEach(function (link) {
 console.log(link);
});

//const fs = require('fs');
//const markdownLinkChecker = require('broken-link-checker');

//const markdown = fs.readFileSync('readme.md').toString();

//const links = markdownLinkChecker(markdown);

//links.forEach(function (link) {
 //console.log(link);
//});

  