const mongoose = require("mongoose");

const templateSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
    templateType: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Template = mongoose.model("template", templateSchema);
