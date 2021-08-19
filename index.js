// === VARIABLES === //
var express = require('express');
var app = express();
var handlebars = require("express-handlebars");
var path = require("path");
var router = express.Router();  //creates a router object

 //===== view ENGINE SET UP =====//
app.set('view engine', 'handlebars');
app.engine(
    "hbs",
    handlebars({
      layoutsDir: path.join(__dirname, "views/layouts"),
      partialsDir: path.join(__dirname, "views/partials"), 
      extname: ".hbs", //expected file extension for handlebars files
      defaultLayout: "layout" //default layout for app, general template for all pages in app
    })
);
app.set("views", path.join(__dirname, "views")); 
app.set("view engine", "hbs");
app.use("/public", express.static(path.join(__dirname, "public")));

app.use(express.static('images'));


//===== .GET PAGES =====//
router.get('/', (req, res, next) => { 
    res.render('index', {title: 'Home Page', css:['style.css']});
});
app.use('/', router);

router.get('/project1', (req, res, next) => {
    res.render('project1', {title: 'Data Structures', css:['projects.css'], js:[]});
});

router.get('/project2', (req, res, next) => {
    res.render('project2', {title: 'Fountain Website', css:['projects.css'], js:[]});
});

router.get('/project3', (req, res, next) => {
    res.render('project3', {title: 'This Portfolio', css:['projects.css'], js:[]});
});

router.get('/project4', (res, next) => {
    res.render('project4', {title: 'Dictionary', css:['projects.css'], js:[]});
});

app.listen(3000);

// app.listen(process.env.PORT);