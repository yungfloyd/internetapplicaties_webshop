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

## Automatisch herstarten na wijziging
`npm install --save-dev nodemon`  
start project nu door: `npm run devstart`

## BOOTSTRAP - CSS template
[Bootstrap](https://getbootstrap.com/)

## MongoDB - MongoDB Cluster Atlas 
Online cloud platform
DB-user: `dbUser/VfT90sq65jBqAjur`  
DatabaseName: `webshopDB`
Connection string: `mongodb+srv://dbUser:<password>@cluster.rozhm.mongodb.net/<dbname>?retryWrites=true&w=majority`

## Mongoose
Gebruiken om te verbinden met MongoDB

