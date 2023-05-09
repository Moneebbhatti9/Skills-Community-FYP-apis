const express = require("express");
const router = express.Router();

// Candidate Profile Imports
const {
   candidateProfile,
   CandidateProfileSocialLinks,
   getCandidateInfo,
   getCandidateSocial,
   candidateProfileContactInfo,
   getCandidateProfileContactInfo,
   candidateProfileLogo,
   getCandidateProfileLogo,
} = require("../controllers/candidateProfile/myProfileController");
const { protect } = require("../middleware/authMiddleware");

// Candaidate Manage Jobs Imports
const {
   candidateAppliedJobs,
   getCandidateAppliedJobs,
   getCandidateAppliedJobsLength,
} = require("../controllers/candidateAppliedJobs/candidateAppliedJobs");

// Candidate Dashboard Routes
router.get("/applied/job/length/:id", protect, getCandidateAppliedJobsLength);

// Candidate Profile Routes
router.post("/profile", protect, candidateProfile);
router.get("/profile/:id", protect, getCandidateInfo);

router.post("/profile/social/links", protect, CandidateProfileSocialLinks);
router.get("/social/profile/links/:id", protect, getCandidateSocial);

router.post("/profile/contact/info", protect, candidateProfileContactInfo);
router.get(
   "/profile/contact/info/:id",
   protect,
   getCandidateProfileContactInfo
);

router.post("/profile/logo", protect, candidateProfileLogo);
router.get("/profile/logo/:id", protect, getCandidateProfileLogo);

// Candidate Applied Jobs Routes
router.post("/applied/job", protect, candidateAppliedJobs);
router.get("/applied/job/:id", protect, getCandidateAppliedJobs);

module.exports = router;
