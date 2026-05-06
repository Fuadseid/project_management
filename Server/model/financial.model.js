const mongoose = require("mongoose");

const financeSchema = new mongoose.Schema(
  {
    project_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project",
      required: true
    },

    epic_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Epic",
      required: true
    },

    amount: {
      type: Number,
      required: true
    },

    isPaid: {
      type: Boolean,
      default: false
    },

    paidAt: {
      type: Date,
      default: null
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Finance", financeSchema);