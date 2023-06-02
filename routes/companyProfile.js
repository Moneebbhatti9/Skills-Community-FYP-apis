const express = require("express");
const router = express.Router();
const {
   companyProfile,
   companyProfileSocialLinks,
   getCompanyInfo,
   getCompanyInfoPublic,
   getCompanyInfoSocial,
   getCompanyInfoLinksPublic,
   companyProfileContactInfo,
   getCompanyContactInfo,
   getCompanyContactInfoPublic,
   companyProfileLogo,
   getCompanyPorifleLogo,
   getCompanyProfileLogoPublic,
} = require("../controllers/companyProfile/companyProfile");

const {
   getCompanyManageJob, deleteCompanyManageJob,
} = require("../controllers/companyManageJobs/companyManageJobs");

const {
   getApplicationsLength,
} = require("../controllers/companyDashborad/companyDashborad");

const {
   getCompanyAllApplicants,
   getSingleApplicantAvatar,
   getJobAllApplicants,
   getSingleApplicantDetail,
} = require("../controllers/companyAllApplicants/companyAllApplicants");

const { protect } = require("../middleware/authMiddleware");

// Company Dashborad Routes
router.get("/applications/length/:id", protect, getApplicationsLength);

// Company Profile Routes
router.post("/profile", protect, companyProfile);
router.get("/profile/:id", protect, getCompanyInfo);
router.get("/public/profile/:id", getCompanyInfoPublic);

router.post("/profile/social/links", protect, companyProfileSocialLinks);
router.get("/profile/social/links/:id", protect, getCompanyInfoSocial);
router.get("/public/social/links/:id", getCompanyInfoLinksPublic);

router.post("/profile/contact/info", protect, companyProfileContactInfo);
router.get("/profile/contact/info/:id", protect, getCompanyContactInfo);
router.get("/public/contact/info/:id", getCompanyContactInfoPublic);

router.post("/profile/logo", protect, companyProfileLogo);
router.get("/profile/logo/:id", protect, getCompanyPorifleLogo);
router.get("/public/profile/logo/:id", getCompanyProfileLogoPublic);

// Company Manage Jobs Routes
router.get("/manage/job/:id", protect, getCompanyManageJob);
router.delete("/manage/job/:id", deleteCompanyManageJob);

// Company All Applicants Routes
router.get("/all/applicants/:id", protect, getCompanyAllApplicants);
router.get("/single/applicant/avatar/:id", protect, getSingleApplicantAvatar);
router.get("/all/applicants/of/job/:id", protect, getJobAllApplicants);
router.get("/single/applicants/of/job/detail/:id", getSingleApplicantDetail);

module.exports = router;
