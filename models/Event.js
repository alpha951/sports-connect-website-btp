const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema(
  {
    time: {
      type: Date,
      required: [true, "Please provide time"],
    },
    state: {
      type: String,
      required: [true, "Please provide state"],
    },
    city: {
      type: String,
      required: [true, "Please provide city"],
    },
    interests: {
      type: [String],
      required: [true, "Please provide some sports of your interest"],
    },
    skillLevels: {
      type: String,
      enum: ["Beginner", "Intermediate", "Advanced"],
      default: "Beginner",
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Please provide user id who created this event"],
    },
  },
  { timestamps: true }
);

const Event = mongoose.model("Event", EventSchema);

module.exports = Event;
