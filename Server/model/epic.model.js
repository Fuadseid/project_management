const mongoose = require('mongoose')

const epicSchema = mongoose.Schema({
    project_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Project",
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ['active', 'inactive', 'completed'],
        required: true,
    },
});

const Epic = mongoose.model('Epic', epicSchema);
module.exports = Epic;