const mongoose = require("mongoose");

const PostJobs = mongoose.Schema(
   {
      userID: {
         type: mongoose.Schema.Types.ObjectId,
         require: true,
         ref: "RegisterUser",
      },

      jobTitle: {
         type: String,
         require: [true, "Pleas add Job Title"],
      },

      jobDescription: {
         type: String,
         require: [true, "Please Add Job Description"],
      },

      email: {
         type: String,
         require: [true, "Please Add Email Address"],
      },

      username: {
         type: String,
         require: [true, "Please Add username"],
      },

      specialisms: {
         type: Array,
         require: [true, "Please Add Specialisms"],
      },

      jobType: {
         type: String,
         require: [true, "Please Add Job Type"],
      },

      offeredSalary: {
         type: String,
         require: [true, "Please Add Offered Salary"],
      },

      exprience: {
         type: String,
         require: [true, "Please Add Exprience"],
      },

      gender: {
         type: String,
         require: [true, "Please Add Gender"],
      },

      industry: {
         type: String,
         require: [true, "Please Add Industry"],
      },

      qualification: {
         type: String,
         require: [true, "Please Add Qualification"],
      },

      applicationDeadLine: {
         type: String,
         require: [true, "Please Add Application DeadLine"],
      },

      country: {
         type: String,
         require: [true, "Please Add Country"],
      },

      city: {
         type: String,
         require: [true, "Please Add City"],
      },

      completeAddress: {
         type: String,
         require: [true, "Please Add Complete Address"],
      },

      imageUrl: {
         type: String,
         require: [true, "Please Add Image URL"],
      },
   },
   {
      timestamps: true,
   }
);

module.exports = mongoose.model("PostJobs", PostJobs);
