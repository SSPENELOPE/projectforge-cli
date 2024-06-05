// Generic User Schema for mongoDB, add to or take away to make this fit your needs
const  mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
    {
        firstName: String,
        lastName: String,
        username: String,
        email: String,
        password: String,
    },
    {
        toJSON: {
            getters: true,
            virtuals: true,
        },
        id: false,
    }
);

const User = mongoose.model('User', userSchema);

module.exports = User;