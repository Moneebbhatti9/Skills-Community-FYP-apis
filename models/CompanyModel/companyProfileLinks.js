const mongoose = require("mongoose");

const CompanyProfileSocial = mongoose.Schema(
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

module.exports = mongoose.model("CompanyProfileSocial", CompanyProfileSocial);
