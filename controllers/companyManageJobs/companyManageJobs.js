const asyncHandler = require("express-async-handler");
const CandidateAppliedJobs = require("../../models/CandidateAppliedJobs/candidateAppliedJobs");
const PostJobs = require("../../models/postJobs/postJobsModel");
const mailgun = require("mailgun-js");
const DOMAIN = "sandbox76e74114a87b41eea065406202bd20e7.mailgun.org";
const mg = mailgun({ apiKey: "94198cb9eb29236d898ce9ec4637aaaf-4dd50799-7f5bf48f", domain: DOMAIN });

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

const getApproveApplication = asyncHandler(async (req, res ) => {
   const { email } = req.body;

   const data = {
      from: "skillscommunity@domain.com",
      to: email,
      subject: "You are selected for this job.",
      html: `
               <h1>Email has been sent </h1>
            `,
   };
   mg.messages().send(data, function (error, body) {
      if (error) {
         return res.json({
            error: error.message,
         });
      } else {
         return res.json({
            message: "Email has been sent",
         });
      }
   });
})

const getRejectedApplication = asyncHandler(async (req, res ) => {
   const { email } = req.body;

   const data = {
      from: "skillscommunity@domain.com",
      to: email,
      subject: "Your Application is rejected for this job.",
      html: `
               <h1>Email has been sent</h1>
            `,
   };
   mg.messages().send(data, function (error, body) {
      if (error) {
         return res.json({
            error: error.message,
         });
      } else {
         return res.json({
            message: "Email has been sent",
         });
      }
   });
})

module.exports = {
   getCompanyManageJob,
   deleteCompanyManageJob,
   getApproveApplication,
   getRejectedApplication
};




