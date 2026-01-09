const { Schema, model } = require('mongoose');

const TodoSchema = Schema({
    text: {
        type: String,
        required: true,
    },
    checked: {
        type: Boolean,
        require: true
    }
});

module.exports = model('Todos', TodoSchema);