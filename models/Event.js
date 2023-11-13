const mongoose = require("mongoose");

const TimeRangeSchema = new mongoose.Schema({
  startHour: {
    type: Number,
    min: 0,
    max: 23,
    required: true,
  },
  endHour: {
    type: Number,
    min: 0,
    max: 23,
    required: true,
  },
});

const AvailabilitySchema = new mongoose.Schema({
  dayOfWeek: {
    type: String,
    enum: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    required: true,
  },
  timeRanges: TimeRangeSchema,
});

const EventSchema = new mongoose.Schema(
  {
    availability: {
      type: [AvailabilitySchema],
      required: [true, "Please provide your availability"],
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
