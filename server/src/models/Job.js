import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    company: {
      type: String,
      required: true,
      trim: true,
    },

    location: {
      type: String,
      required: true,
      trim: true,
    },

    type: {
      type: String,
      required: true,
      enum: ["Full Time", "Part Time", "Contract", "Internship"],
    },

    salary: {
      type: String,
      required: true,
      trim: true,
    },

    posted: {
      type: String,
      default: "Just now",
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },

    skills: {
      type: [String],
      default: [],
    },

    experience: {
      type: String,
      default: "Not specified",
    },

    mode: {
      type: String,
      default: "On-site",
    },
  },
  {
    timestamps: true,
  },
);

const Job = mongoose.models.Job || mongoose.model("Job", jobSchema);

export default Job;
