const asyncHandler = require("express-async-handler");
const CandidateAppliedJobs = require("../../models/CandidateAppliedJobs/candidateAppliedJobs");
const PostJobs = require("../../models/postJobs/postJobsModel");

const getCompanyManageJob = asyncHandler(async (req, res) => {
   const jobs = await CandidateAppliedJobs.find({ companyId: req.params.id });
   const jobsIds = jobs.map((job) => job.jobId);

   const appliedJobs = await PostJobs.find({ _id: { $in: jobsIds } });

   res.status(200).json({ message: "Managed Jobs", appliedJobs });
});

module.exports = {
   getCompanyManageJob,
};
