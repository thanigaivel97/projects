const express = require('express');
const parser = require('body-parser');
const app = express();
const homepageroute = require('./routes/homepage.js');
const path = require('path');
const mongoose = require('mongoose');

const uri = 'mongodb+srv://thani:hello@cluster0-weo9r.mongodb.net/test?retryWrites=true&w=majority';



app.use(express.static(path.join(__dirname, 'files')));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(parser.urlencoded({ extended: true }));

app.use(homepageroute);
// sequelize.sync()
//     .success(function() { console.log('DB synced') })
//     .error(function(err) { console.log('Error:', err) });

mongoose.connect(uri).then(result => {
    app.listen(5000);
}).catch(err => {
    console.log(err);
});