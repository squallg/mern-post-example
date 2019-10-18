/*
 * User Model
 */

/* Mongoose import */
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    lastname: String,
    firstname: String
});

module.exports = mongoose.model('User', UserSchema);