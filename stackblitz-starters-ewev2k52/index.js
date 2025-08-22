// schema.js
const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Course title is required"],
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  durationWeeks: {
    type: Number,
    required: [true, "Duration is required"],
    min: [1, "Duration must be at least 1 week"],
  },
  instructor: {
    type: String,
    required: [true, "Instructor name is required"],
    trim: true,
  },
});


const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Student name is required"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    lowercase: true,
    match: [/\S+@\S+\.\S+/, "Please provide a valid email"],
  },
  enrollmentDate: {
    type: Date,
    default: Date.now,
  },
  courses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },
  ],
});

const Course = mongoose.model("Course", courseSchema);
const Student = mongoose.model("Student", studentSchema);

module.exports = { Course, Student };
