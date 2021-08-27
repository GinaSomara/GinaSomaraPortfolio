// === VARIABLES === //
var express = require('express');
var app = express();
var handlebars = require("express-handlebars");
var path = require("path");


 //===== view ENGINE SET UP =====//
app.set('view engine', 'handlebars');
app.engine(
    "hbs",
    handlebars({
      layoutsDir: path.join(__dirname, "/public/views/layouts"),
      partialsDir: path.join(__dirname, "/public/views/partials"), 
      extname: ".hbs", //expected file extension for handlebars files
      defaultLayout: "layout" //default layout for app, general template for all pages in app
    })
);

app.set("views", path.join(__dirname, "views")); 
app.set("view engine", "hbs");
app.use("/public", express.static(path.join(__dirname, "public")));


// Route to display static src images
app.get("/static", (req, res) => {
    res.render("static");
});


// app.use('/');
//===== .GET PAGES =====//
app.get('/', (req, res, next) => { 
    res.render('../public/views/index', {title: 'Home Page', css:['../public/css/style.css'], js:['../public/js/navBar.js']});
});
// app.use('/', router);

app.get('/project1', (req, res, next) => {
    res.render('../public/views/partials/project1', {title: 'Data Structures', css:['../public/css/projects.css'], js:['../public/js/navBar.js']});
});

app.get('/project2', (req, res, next) => {
    res.render('../public/views/fountainWebsite/html/home', {title: 'The Fountain', css:['../public/css/fountainWebsite/home.css']});
});

app.get('/project3', (req, res, next) => {
    res.render('../public/views/partials/project3', {title: 'This Portfolio', css:['../public/css/projects.css'], js:['../public/js/navBar.js']});
});

app.get('/project4', (req, res, next) => {
    res.render('../public/views/partials/project4', {title: 'Dictionary', css:['../public/css/projects.css'], js:['../public/js/navBar.js']});
});


// app.listen(3000);

app.listen(process.env.PORT || 3000);