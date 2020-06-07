const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userschema = new schema({
    firstname: String,
    lastname: String,
    age: Number,
    sex: String,
    hobbies: Array,
    country: String,
    city: String,
    dob: String,
    dispslayname: String,
    email: String,
    password: String
});

module.exports = mongoose.model('user', userschema);