const mongoose = require("mongoose");

const CandidateProfileLogo = mongoose.Schema(
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

      logo: {
         type: String,
         require: [true, "Please add a company logo"],
      },
   },
   {
      timestamps: true,
   }
);

module.exports = mongoose.model("CandidateProfileLogo", CandidateProfileLogo);
