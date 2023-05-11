const asyncHandler = require("express-async-handler");
const CandidateAppliedJobs = require("../../models/CandidateAppliedJobs/candidateAppliedJobs");
const CandidateProfile = require("../../models/CandidaiteProfileModel/candidateProfile");
const CandidateProfileLogo = require("../../models/CandidaiteProfileModel/candidateProfileLogo");

const getCompanyAllApplicants = asyncHandler(async (req, res) => {
   const appliedJobs = await CandidateAppliedJobs.find({
      companyId: req.params.id,
   });

   const candidateUniqueIds = new Set(
      appliedJobs.map((job) => job.userID.toString().trim().toLowerCase())
   );

   const candidateIdsArray = Array.from(candidateUniqueIds);

   const allApplicants = await Promise.all(
      candidateIdsArray.map((id) => CandidateProfile.findOne({ userID: id }))
   );

   res.status(200).json({ message: "All Applicants", allApplicants });
});

const getSingleApplicantAvatar = asyncHandler(async (req, res) => {
   const applicantAvatar = await CandidateProfileLogo.findOne({
      userID: req.params.id,
   });

   res.status(200).json({
      message: "Single Applicant Avatar",
      applicantAvatar: applicantAvatar,
   });
});

const getJobAllApplicants = asyncHandler(async (req, res) => {
   const appliedJobs = await CandidateAppliedJobs.find({
         jobId: req.params.id,
      });

   const applicantIds = appliedJobs.map((applicant) => applicant.userID);

   const jobApplicants = await CandidateProfile.find({ userID: { $in: applicantIds } });   

   res.status(200).json({
      message: "Job All Applicants", 
      appliedJobs: appliedJobs, 
      applicantIds: applicantIds,
      jobApplicants: jobApplicants
   });
})

module.exports = { getCompanyAllApplicants, getSingleApplicantAvatar, getJobAllApplicants };
