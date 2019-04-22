const fs = require('fs');
const fetch = require('node-fetch');
const command = process.argv[2]//te toma desde la posicion dos 
const markdownLinkExtractor = require('markdown-link-extractor');
const markdown = fs.readFileSync(command).toString();// leyendo el command , antes era el readme
const links = markdownLinkExtractor(markdown);//aqui extrae lo deja en lick 

links.forEach(function (element) {// lo recorre  
fetch(element).then((res)=>{ // fetch toma el elemnto que toma
    console.log(res.url + " " + res.status + " " + res.statusText); // te toma la url un espacio el numero 200 y si esta ok el lick
})
.catch (error=>{

 console.log(error.message);
})
});

exports.links = links;

//const fs = require('fs');
//const markdownLinkChecker = require('broken-link-checker');

//const markdown = fs.readFileSync('readme.md').toString();

//const links = markdownLinkChecker(markdown);

//links.forEach(function (link) {
 //console.log(link);
//});

  
