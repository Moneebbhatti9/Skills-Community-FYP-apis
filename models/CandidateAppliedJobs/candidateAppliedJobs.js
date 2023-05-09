const mongoose = require("mongoose");

const CandidateAppliedJobs = mongoose.Schema(
   {
      userID: {
         type: mongoose.Schema.Types.ObjectId,
         require: true,
         ref: "RegisterUser",
      },
      
      companyId: {
         type: mongoose.Schema.Types.ObjectId,
         require: true,
      },
      
      userId: {
         type: String,
         require: true,
      },

      jobId: {
         type: String,
         require: true,
      },

   },
   {
      timestamps: true,
   }
);

module.exports = mongoose.model("CandidateAppliedJobs", CandidateAppliedJobs);
