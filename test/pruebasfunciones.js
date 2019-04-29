#!/usr/bien  //buscar las 2
"use strict" // buscar tambien
//fetch package 
const fetch = require("fetch");
const fetchUrl = fetch.fetchUrl;
const FileHound = require('filehound');
const mdLink =require('./md-links');
const fs = require("fs");
var markdownLinkExtractor = require('markdown-link-extractor');


//filehound busca en la carpeta 

const files = FileHound.create()
  .paths('C:\\Users\\Luci\\Desktop\\laboratoria\\SCL008-md-links')
  .ext('md')
  .find();

files.then(res=>{
    res.forEach(function (fileAll) {
       
//markdown 
const markdown = fs.readFileSync(fileAll).toString();  // extrae archivos md
// console.log(markdown);

//links lee los links dentro de los archivos
const links = markdownLinkExtractor(markdown);
// console.log(links)
links.forEach(function (link) { // lee cada link de readme
   // console.log(link);
});
});
});