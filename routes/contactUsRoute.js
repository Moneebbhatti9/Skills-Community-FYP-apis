const express = require("express");
const router = express.Router();

// **Import From ContactUs Controllers
const { contactUs } = require("../controllers/contactUs/contactUsController");

// **Actual Routes
router.post("/", contactUs);

module.exports = router;
