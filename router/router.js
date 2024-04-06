const express = require('express');

const router = express.Router();

router.get('/', (request, response) => {
    response.render('home', { pagename: 'Home' });
});

router.post('/register', (request, response) => {
    console.log('Registering...'); // for debug
    response.render('home', { pagename: 'Home' });
});

router.post('/login', (request, response) => {
    console.log('Logging in...'); // for debug
    response.render('about', { pagename: 'About' });
});

router.get('/register', (request, response) => {
    response.render('register', { pagename: 'Register' });
});

router.get('/login', (request, response) => {
    response.render('login', { pagename: 'Login' });
});

router.get('/about', (request, response) => {
    response.render('about', { pagename: 'About' });
});
module.exports = router;
