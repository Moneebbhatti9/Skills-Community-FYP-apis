const mongoose = require("mongoose");

const CandidateProfileSocial = mongoose.Schema(
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

      twitter: {
         type: String,
         require: [true, "Please add a company Twitter"],
      },

      facebook: {
         type: String,
         require: [true, "Please add a company Facebook"],
      },

      linkedIn: {
         type: String,
         require: [true, "Please add a company LinkedIn"],
      },

      googlePlus: {
         type: String,
         require: [true, "Please add a company Google"],
      },
   },
   {
      timestamps: true,
   }
);

module.exports = mongoose.model(
   "CandidateProfileSocial",
   CandidateProfileSocial
);
