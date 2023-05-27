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
      },

      jobTitle: {
         type: String,
      },

      phone: {
         type: String,
      },

      email: {
         type: String,
      },

      website: {
         type: String,
      },

      currentSalary: {
         type: String,
      },

      expectedSalary: {
         type: String,
      },

      experience: {
         type: String,
      },

      age: {
         type: Number,
      },

      educationLevel: {
         type: String,
      },

      languages: {
         type: String,
      },

      description: {
         type: String,
      },

      resume: {
         type: String,
      }
   },
   {
      timestamps: true,
   }
);

module.exports = mongoose.model("CandidateProfile", CandidateProfile);
