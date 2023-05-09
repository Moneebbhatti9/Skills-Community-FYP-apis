const asyncHandler = require("express-async-handler");
const CandidateAppliedJobs = require("../../models/CandidateAppliedJobs/candidateAppliedJobs");
const PostJobs = require("../../models/postJobs/postJobsModel");

const candidateAppliedJobs = asyncHandler(async (req, res) => {
   const { userId, jobId, companyId } = req.body;

   const appliedJob = await CandidateAppliedJobs.create({
      userId: userId,
      jobId: jobId,
      companyId: companyId,
      userID: req.user.id,
   });

   res.status(201).json(appliedJob);
});

const getCandidateAppliedJobs = asyncHandler(async (req, res) => {
   const jobs = await CandidateAppliedJobs.find({ userID: req.params.id });
   const jobsIds = jobs.map((job) => job.jobId);

   const postJobs = await PostJobs.find({ _id: { $in: jobsIds } });

   res.status(200).json(postJobs);
});

const getCandidateAppliedJobsLength = asyncHandler(async (req, res) => {
   const jobs = await CandidateAppliedJobs.find({ userID: req.params.id });
   const jobsLength = jobs.length;

   res.status(200).json({ jobs, jobsLength });
});

module.exports = {
   candidateAppliedJobs,
   getCandidateAppliedJobs,
   getCandidateAppliedJobsLength,
};
