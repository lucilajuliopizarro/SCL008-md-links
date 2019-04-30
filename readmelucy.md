## Markdown Links
# md-links
[Markdown](https://es.wikipedia.org/wiki/Markdown) es un lenguaje de marcado
ligero muy popular entre developers. Es usado en muchísimas plataformas que
manejan texto plano (GitHub, foros, blogs, ...), y es muy común
encontrar varios archivos en ese formato en cualquier tipo de repositorio
(empezando por el tradicional `README.md`).

Estos archivos `Markdown` normalmente contienen _links_ (vínculos/ligas) que
muchas veces están rotos o ya no son válidos y eso perjudica mucho el valor de
la información que se quiere compartir.

Dentro de una comunidad de código abierto, nos han propuesto crear una
herramienta usando [Node.js](https://nodejs.org/), que lea y analice archivos
en formato `Markdown`, para verificar los links que contengan y reportar
algunas estadísticas.

#Instalacion 

#Usabilidad
const mdLink =require('./md-links');
CLI:node index.js ./README.md
Respuesta de la siguiente forma:

 https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg  200 OK
 https://semver.org/  200 OK
 https://nodejs.org/en/  200 OK
 https://www.youtube.com/watch?v=WgSc1nv_4Gw  200 OK

 #Muestra
 .res.url
  Ejemplo:https://medium.com/netscape/a-guide-to-create-a-nodejs-command-line-package-c2166ad0452e 
 .res.status
  Ejemplo: 200 
 .res.statusText
  Ejemplo: ok
 
 #Test
 Ejemplo:
 const mdLinks = require('../md-links');


describe('mdLinks', () => {

  it('Debería retornar los 3 links que se encuentran en pruebatest.md', () => {
    expect(mdLinks.readFile('pruebatest.md')).resolves.toEqual(['https://es.wikipedia.org/wiki/Markdown', 'https://nodejs.org/','https://nodejs.org/docs/latest-v0.10.x/api/modules.html']);
  });
 
});

Me retorna al correr en terminal npm test:
> md-links@0.1.0 test C:\Users\Luci\Desktop\SCL008-md-links
> jest --coverage

 PASS  test/md-links.spec.js
  mdLinks
    √ Debería retornar los 3 links que se encuentran en pruebatest.md (7ms)

-------------|----------|----------|----------|----------|-------------------|
File         |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
-------------|----------|----------|----------|----------|-------------------|
All files    |    55.56 |        0 |    28.57 |    55.56 |                   |
 md-links.js |    55.56 |        0 |    28.57 |    55.56 |... 25,26,27,28,32 |
-------------|----------|----------|----------|----------|-------------------|
Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        5.229s, estimated 9s
Ran all test suites.

 ##Planificacion
 Para la planificacion utilice Wiki de github,en el cual realizaba organizacion por dia planificado segun materias a estudiar y practicas y codigos a realizar.
 https://github.com/lucilajuliopizarro/SCL008-md-links/wiki/Planificaci%C3%B3n-d%C3%ADa-1

