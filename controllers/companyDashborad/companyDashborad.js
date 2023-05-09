const asyncHandler = require("express-async-handler");
const CandidateAppliedJobs = require("../../models/CandidateAppliedJobs/candidateAppliedJobs");

const getApplicationsLength = asyncHandler(async (req, res) => {
   const applications = await CandidateAppliedJobs.find({
      companyId: req.params.id,
   });

   const applicationsLength = applications.length;

   res.json({ message: "Applications Length", applicationsLength });
});

module.exports = {
   getApplicationsLength,
};
