const express = require("express");
const router = express.Router();
const {
   postJobs,
   getJobs,
   deleteJob,
   getSingleJob,
   getPostedJobLength,
} = require("../controllers/postJobs/postJobsController");

const { protect } = require("../middleware/authMiddleware");

// **Actual Routes
router.post("/job", protect, postJobs);
router.get("/job", getJobs);
router.delete("/job/:id", protect, deleteJob);

// **Get Single Job
router.get("/job/:id", getSingleJob);

// **Get Posted Job Length (Count)
router.get("/job/company/:id", protect, getPostedJobLength);

module.exports = router;
