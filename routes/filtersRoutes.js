const experss = require("express");
const router = experss.Router();
const { filterJobsBySearch } = require("../controllers/filters/filters");

router.post("/jobs/by/search/:jobtitle", filterJobsBySearch);

module.exports = router;
