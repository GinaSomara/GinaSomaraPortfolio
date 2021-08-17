var express = require('express');
var expressHBS = require('express-handlebars');
var app = express();
var router = express.Router();
app.engine('handlebars', expressHBS());
app.set('view engine', 'handlebars');


//===== .GET PAGES =====//
router.get('/', (res, next) => { 
    res.render('index', {title: 'Home Page', css:['style.css'], js:[]});
});

router.get('/project1', (res, next) => {
    res.render('project1', {title: 'Data Structures', css:['projects.css'], js:[]});
});

router.get('/project2', (res, next) => {
    res.render('project2', {title: 'Fountain Website', css:['projects.css'], js:[]});
});

router.get('/project3', (res, next) => {
    res.render('project3', {title: 'This Portfolio', css:['projects.css'], js:[]});
});

router.get('/project4', (res, next) => {
    res.render('project4', {title: 'Dictionary', css:['projects.css'], js:[]});
});

app.listen(3000);

// app.listen(process.env.PORT);