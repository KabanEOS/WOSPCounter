const mongoose = require('mongoose');

const counterSchema = {
    counterValue: number
}

const Note = mongoose.model("Counter",counterSchema);

module.export = Note;