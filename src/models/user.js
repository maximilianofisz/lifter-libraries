const Mongoose = require('mongoose')

const userSchema = new Mongoose.Schema ({
    email: {type: String, required: true},
    password: {type: String, required: true},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    age: {type: Number, required: true},
    location: {type: String, required: true}
})

module.exports = userSchema

