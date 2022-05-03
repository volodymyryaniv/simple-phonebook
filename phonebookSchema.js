const mongoose = require('mongoose');

const PhonebookSchema = new mongoose.Schema({
   name: String,
   number: Number
})

module.exports = mongoose.model('phonebook', PhonebookSchema, 'phonebook');