const express = require('express');
const path = require('path');
const AuthRoute = require('./routes/AuthRoutes');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/auth', AuthRoute);

app.listen(3000, ()=>{
    console.log(`Listening One port ${3000}`)
});