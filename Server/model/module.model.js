const mongoose = require("mongoose");

const moduleSchema = mongoose.Schema({
  project_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Project",
    required: true,
  },
  epic_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Epic",
    default: null,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  estimated_time: {
    type: Date,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});
const Module = mongoose.model("Module", moduleSchema);
module.exports = Module;
