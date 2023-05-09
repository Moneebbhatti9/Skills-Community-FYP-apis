const mongoose = require("mongoose");

const ContactUsModel = mongoose.Schema(
   {
      name: {
         type: String,
         require: [true, "Please Add Name"],
      },

      email: {
         type: String,
         require: [true, "Please Add Email"],
      },

      subject: {
         type: String,
         require: [true, "Please Add Subject"],
      },

      yourMessage: {
         type: String,
         require: [true, "Please Add Your Message"],
      },
   },
   {
      timestamps: true,
   }
);

module.exports = mongoose.model("ContactUs", ContactUsModel);
