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
DB-user: `dbUser/VfT90sq65jBqAjur`  
DatabaseName: `webshopDB`
Connection string: `mongodb+srv://dbUser:<password>@cluster.rozhm.mongodb.net/<dbname>?retryWrites=true&w=majority`

## Mongoose
Gebruiken om te verbinden met MongoDB  

## Session
`npm install express-session --save`  
Geen idee wat dit eigenlijk doet  

## Passport
`npm install passport --save`  
`npm install passport-local-mongoose --save`  

Gemakkelijk voor de login dinges  

