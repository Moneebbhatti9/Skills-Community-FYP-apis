const mongoose = require("mongoose");

const CompanyProfileContactInfo = mongoose.Schema(
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

      city: {
         type: String,
         require: [true, "Please add a City"],
      },

      country: {
         type: String,
         require: [true, "Please add a Country"],
      },

      address: {
         type: String,
         require: [true, "Please add an Address"],
      },
   },
   {
      timestamps: true,
   }
);

module.exports = mongoose.model(
   "CompanyProfileContactInfo",
   CompanyProfileContactInfo
);
