const mongoose = require("mongoose");

const CandidateProfileContactInfo = mongoose.Schema(
   {
      userID: {
         type: mongoose.Schema.Types.ObjectId,
         require: true,
         ref: "RegisterUser",
      },

      userId: {
         type: String,
         require: [true, "Please privide userID"],
      },

      city: {
         type: String,
         require: [true, "Please add a city"],
      },

      country: {
         type: String,
         require: [true, "Please add a country"],
      },

      address: {
         type: String,
         require: [true, "Please add am address"],
      },
   },
   {
      timestamps: true,
   }
);

module.exports = mongoose.model(
   "CandidateProfileContactInfo",
   CandidateProfileContactInfo
);
