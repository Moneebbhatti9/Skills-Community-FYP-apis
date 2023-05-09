const mongoose = require("mongoose");

const CompanyProfile = mongoose.Schema(
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

      comapnyName: {
         type: String,
         require: [true, "Please add a company name"],
      },

      emialAddress: {
         type: String,
         require: [true, "Please add an Email Address"],
      },

      phone: {
         type: String,
         require: [true, "Please add a phone number"],
      },

      website: {
         type: String,
         require: [true, "Please add a website"],
      },

      estSince: {
         type: String,
         require: [true, "Please add existance since"],
      },

      teamSize: {
         type: String,
         require: [true, "Please add a team size"],
      },

      aboutCompany: {
         type: String,
         require: [true, "Please add a company About"],
      },
   },
   {
      timestamps: true,
   }
);

module.exports = mongoose.model("CompanyProfile", CompanyProfile);
