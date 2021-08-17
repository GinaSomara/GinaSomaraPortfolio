var express = require('express');
var router = express.router();

//===== .GET PAGES =====//
router.get('/', getRecentPosts, function(req, res, next) {
    res.render('index', { title: 'Express', name:"Gina Somara", css:['home.css'], js:['frontendjs.js']});
 });
 
 router.get('/login', (req, res, next) => {
   res.render('login', {title: 'Login', css:['styles.css']});
 });




//===== .GET PAGES =====//
router.get('/', (req,res, next) => { 
    res.render('index', {title: 'Home Page', css:['style.css'], js:[]});
});

router.get('/project1', )(req, res, next) => {
    res.render('', {title: 'Project1', css:['projects.css'], js:[]});
});




modules.exports = router;