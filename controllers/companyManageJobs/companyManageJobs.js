const asyncHandler = require("express-async-handler");
const CandidateAppliedJobs = require("../../models/CandidateAppliedJobs/candidateAppliedJobs");
const PostJobs = require("../../models/postJobs/postJobsModel");

const getCompanyManageJob = asyncHandler(async (req, res) => {
   const jobs = await CandidateAppliedJobs.find({ companyId: req.params.id });
   const jobsIds = jobs.map((job) => job.jobId);

   const appliedJobs = await PostJobs.find({ _id: { $in: jobsIds } });

   res.status(200).json({ message: "Managed Jobs", appliedJobs });
});

const deleteCompanyManageJob = asyncHandler(async (req, res) => {
   const job = await CandidateAppliedJobs.findByIdAndDelete({ jobId: req.params.id });

   if(!job) {
      res.status(404);
      throw new Error("Job not found");
   }

   try {
      res.status(200).json({message: "Job Deleted", id: job._id});
   } catch (error) {
      res.status(400);
      throw new Error(error); 
   }
}); 

module.exports = {
   getCompanyManageJob,
   deleteCompanyManageJob
};
