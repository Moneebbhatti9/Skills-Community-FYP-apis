const mongoose = require("mongoose");

const CandidateProfile = mongoose.Schema(
   {
      userID: {
         type: mongoose.Schema.Types.ObjectId,
         require: true,
         ref: "RegisterUser",
      },

      userId: {
         type: String,
         require: [true, "Pleas add userId"],
      },

      fullName: {
         type: String,
         require: [true, "Please add a full name"],
      },

      jobTitle: {
         type: String,
         require: [true, "Please add a job title"],
      },

      phone: {
         type: String,
         require: [true, "Please add a phone"],
      },

      email: {
         type: String,
         require: [true, "Please add a email"],
      },

      website: {
         type: String,
         require: [true, "Please add a website"],
      },

      currentSalary: {
         type: String,
         require: [true, "Please add a current"],
      },

      expectedSalary: {
         type: String,
         require: [true, "Please add a expected"],
      },

      experience: {
         type: String,
         require: [true, "Please add a Experience"],
      },

      age: {
         type: Number,
         require: [true, "Please add a age"],
      },

      educationLevel: {
         type: String,
         require: [true, "Please add a education level"],
      },

      languages: {
         type: String,
         require: [true, "Please add a language"],
      },

      description: {
         type: String,
         require: [true, "Please add a description"],
      },
   },
   {
      timestamps: true,
   }
);

module.exports = mongoose.model("CandidateProfile", CandidateProfile);
