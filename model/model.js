const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fileSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    file: {
        type: Buffer,
        required: true
    }
})

const scheme = mongoose.model('availity', fileSchema);
module.exports = scheme;