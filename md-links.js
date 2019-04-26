const fs = require('fs');
const fetch = require('node-fetch');
const command = process.argv[2]//te toma desde la posicion dos 
const markdownLinkExtractor = require('markdown-link-extractor');
const markdown = fs.readFileSync(command).toString();// leyendo el command , antes era el readme
const links = markdownLinkExtractor(markdown);//aqui extrae lo deja en linck 
// valida 
/*links.forEach(function (element) {// lo recorre  
fetch(element).then((res)=>{ // fetch toma el elemnto que toma
    console.log(res.url + " " + res.status + " " + res.statusText); // te toma la url un espacio el numero 200 y si esta ok el lick
})
.catch (error=>{

 console.log(error.message);
})
});
*/
exports.links = links;

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
const fs = require('fs');
const path = require('path');
const dir = "C:\\Users\\Luci\\Desktop\\laboratoria";
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
const FileHound = require('filehound');
// C:\\Users\\Luci\\Desktop\\laboratoria\\SCL008-md-links
const files = FileHound.create()
 .paths('C:\Users\Luci\Desktop\laboratoria') // ruta donde quiero que busque los archivos
 .ext('md')// tipo de archivo que quiero que busque
 .find();

files.then(res =>{
    console.log(res);
});*/
//-------------------------------------------------------
//muestra enlaces rotos

const findlinks = require('findlinks');
findlinks({ src: 'C:\Users\Luci\Desktop\laboratoria' })
  .then(result => console.log(result))
  .catch(err => console.error(err));
