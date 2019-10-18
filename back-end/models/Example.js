/*
 * Example Model
 */

/* Mongoose import */
const mongoose = require('mongoose');

const ExampleSchema = new mongoose.Schema({
    message: String,
    version: Number,
});

module.exports = mongoose.model('Example', ExampleSchema);