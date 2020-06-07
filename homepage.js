const db = require('../util/database.js');
const parser = require('body-parser');
const user = require('../models/user.js');
var firstname = "";
var lastname = "";
var age = 0;
var sex = "";
var country = "";
var dob = "";
var dispslayname = "";
var email = "";
var password = "";
var hobbies = [];


exports.afteruserlogin = (req, res, next) => {

    country = req.body.country;
    city = req.body.city;
    dob = req.body.dob;
    dispslayname = req.body.dispslayname;
    email = req.body.email;
    password = req.body.password;
    hobbies = req.body.hobbies;
    console.log(hobbies);

    const users = new user({ firstname: firstname, lastname: lastname, age: age, hobbies: hobbies, sex: sex, country: country, city: city, dob: dob, dispslayname: dispslayname, email: email, password: password })
    users.save().then(result => {
        console.log(result);
    }).catch();

    user.find().then(products => {
        console.log('now displaying products');
        res.render('afterlogin.ejs', { pagetittle: "user-page", path: '/user', prod: products });
        console.log(products[0]);
        console.log(products[0].firstname);
    }).catch(err => {
        console.log(err);
    });
}

exports.posthomepagebegin = (req, res, next) => {
    res.render('homepage.ejs', { path: '/', pagetittle: "Dating" });

}
exports.homepagebegin = (req, res, next) => {
    res.render('homepage.ejs', { path: '/', pagetittle: "Dating" });

}

exports.servicespage = (req, res, next) => {
    res.render('services.ejs', { path: '/services', pagetittle: "services" });
}

exports.termsandc = (req, res, next) => {
    res.render('termsandc.ejs', { path: '/terms', pagetittle: "termsandc" });
}

exports.signup = (req, res, next) => {
    res.render('signup.ejs', { path: '/signup', pagetittle: "signup" });
}

exports.signupnext = (req, res, next) => {

    firstname = req.body.firstname;
    lastname = req.body.lastname;
    age = req.body.age;
    sex = req.body.sex;
    lookingfor = req.body.lookingfor;


    res.render('signupnext.ejs', { path: '/signupnext', pagetittle: "signupform" });
}