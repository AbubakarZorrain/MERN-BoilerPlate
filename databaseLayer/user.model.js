// create a user model schema
const mongoose = require('mongoose');
var userSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    created_at: Date,
    updated_at: Date

});
module.exports = mongoose.model('User', userSchema);