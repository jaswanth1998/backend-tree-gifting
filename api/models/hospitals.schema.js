const mongoose = require('mongoose');

const hospitalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
});

const hospital = mongoose.model('Hospital', hospitalSchema);

module.exports = {
    hospital
}