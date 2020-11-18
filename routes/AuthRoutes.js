const router = require('express').Router();

router.get('/login', (req, res)=>{
    res.render('login');
});

router.get('/google', (req, res)=>{
    res.send('Log in with google');
})

router.get('/logout', (req, res)=>{
    res.send('Logging Out')
});

module.exports = router;