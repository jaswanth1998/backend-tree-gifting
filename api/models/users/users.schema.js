const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        required: true
    },
    uid: {
        type: String,
        required: true
    },
    profilePic: {
        type: String,
        required: true
    },
    emailId: {
        type: String,
        required: true
    },
    mobileNo: {
        type: Number,
        required: true
    },
});

const user = mongoose.model('User', userSchema);

module.exports = {
    user
}