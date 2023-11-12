const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema(
  {
    time: Date,
    location: String,
    interests: {
      type: [String],
    },
    skillLevels: {
      type: String,
      enum: ["Beginner", "Intermediate", "Advanced"],
      default: "Beginner",
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Event = mongoose.model("Event", EventSchema);

module.exports = Event;
