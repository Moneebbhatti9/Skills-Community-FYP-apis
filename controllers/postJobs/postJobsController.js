const asyncHandler = require("express-async-handler");
const PostJobs = require("../../models/postJobs/postJobsModel");

//  **Get All Jobs Handler
const getJobs = asyncHandler(async (req, res) => {
   const pageSize = 6;
   const page = parseInt(req.query.page || "0");
   const total = await PostJobs.countDocuments({});
   const jobs = await PostJobs.find({})
      .limit(pageSize)
      .skip(pageSize * page);

   res.status(200).json({
      totalPages: Math.ceil(total / pageSize),
      jobs,
   });
});

// **Post Job Handler
const postJobs = asyncHandler(async (req, res) => {
   const {
      jobTitle,
      jobDescription,
      email,
      username,
      // specialisms,
      jobType,
      offeredSalary,
      exprience,
      gender,
      // industry,
      qualification,
      applicationDeadLine,
      country,
      city,
      completeAddress,
   } = req.body;

   if (
      !jobTitle ||
      !jobDescription ||
      !email ||
      !username ||
      // !specialisms ||
      !jobType ||
      !offeredSalary ||
      !exprience ||
      !gender ||
      // !industry ||
      !qualification ||
      !applicationDeadLine ||
      !country ||
      !city ||
      !completeAddress
   ) {
      res.status(400);
      throw new Error("All fields are required");
   }

   try {
      const newJob = await PostJobs.create({
         jobTitle: req.body.jobTitle,
         jobDescription: req.body.jobDescription,
         email: req.body.email,
         username: req.body.username,
         // specialisms: req.body.specialisms,
         jobType: req.body.jobType,
         offeredSalary: req.body.offeredSalary,
         exprience: req.body.exprience,
         gender: req.body.gender,
         // industry: req.body.industry,
         qualification: req.body.qualification,
         applicationDeadLine: req.body.applicationDeadLine,
         country: req.body.country,
         city: req.body.city,
         completeAddress: req.body.completeAddress,
         imageUrl: req.body.imageUrl,
         userID: req.user.id,
      });

      res.status(200).json(newJob);
   } catch (error) {
      console.log("Error While posting a Job : ", error);
   }
});

// **Delete Job Handler
const deleteJob = asyncHandler(async (req, res) => {
   const job = await PostJobs.findById(req.params.id);

   if (!job) {
      res.status(400);
      throw new Error("Job not found");
   }

   if (!req.user) {
      res.status(401);
      throw new Error("User not found");
   }

   if (job.userID.toString() !== req.user.id) {
      res.status(401);
      throw new Error("User not authorized");
   }

   await job.remove();
   res.status(200).json({ id: req.params.id });
});

// **Get Single Job
const getSingleJob = asyncHandler(async (req, res) => {
   const singleJob = await PostJobs.findById(req.params.id);

   if (!singleJob) {
      res.status(404);
      throw new Error("Job not found");
   }

   res.json(singleJob);
});

// **Get Single Company Job and Legth
const getPostedJobLength = asyncHandler(async (req, res) => {
   const jobs = await PostJobs.find({ userID: req.params.id });
   const jobsLength = jobs.length;

   res.status(200).json({ jobs, jobsLength });
});

module.exports = {
   postJobs,
   getJobs,
   deleteJob,
   getSingleJob,
   getPostedJobLength,
};
