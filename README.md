# Internetapplicaties - Webshop


# Zelf opzetten
Repo clonen  
In de map `npm install` uitvoeren. Installeert alle nodige dependencies.  
Webserver starten: `npm run devstart` (auto herstart na wijziging) of `npm start`

# Development
## Express.js
Terminal in c:/  
`npm install express-generator -g`

Terminal in project folder  
`express --git --pug`  
`npm install`

`SET DEBUG=*`  
`npm start`


## Automatisch server herstarten na wijziging
`npm install --save-dev nodemon`  
in package.json:  
```
"scripts": {
    "start": "node ./bin/www",
    "devstart": "nodemon -e js,pug --ignore public",
    "serverstart": "DEBUG=* npm run devstart"
  },
```
start project nu door: `npm run devstart`  


## Automatisch browser refreshen na wijzigin
`npm install livereload --save`  
`npm install connect-livereload --save`  
in app.js:  
```
// LiveReload server
var livereload = require("livereload");
var liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, 'public'));
```

```
var connectLivereload = require("connect-livereload");

var app = express();

app.use(connectLivereload());
```


## BOOTSTRAP - CSS template
[Bootstrap](https://getbootstrap.com/)

## MongoDB - MongoDB Cluster Atlas 
Online cloud platform

## Mongoose
Gebruiken om te verbinden met MongoDB  

## Session
`npm install express-session --save`  
Geen idee wat dit eigenlijk doet  

## Passport
`npm install passport --save`  
`npm install passport-local-mongoose --save`  

Gemakkelijk voor de login dinges  

## Google Maps (1ste API)
Op de contact pagina  
`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2514.6307419508366!2d3.150585715748851!3d50.93054737954455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c33661a8ed09df%3A0x578cd95140e2ae8a!2sKoestraat%2020%2C%208800%20Roeselare!5e0!3m2!1snl!2sbe!4v1606408350147!5m2!1snl!2sbe" width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`

## Google Analytics (2de API)
In head:    
```
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-CGSR8CPY3N"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-CGSR8CPY3N');
</script>
```