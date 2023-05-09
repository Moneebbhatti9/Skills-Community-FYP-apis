const express = require("express");
const router = express.Router();

// **Import From Accounts Controllers
const { login } = require("../controllers/accounts/loginController");
const {
   registerNewUser,
} = require("../controllers/accounts/registerController");
const { loginWithGoogle } = require("../controllers/accounts/loginWithGoogle");

// **Actual Routes
router.post("/login", login);
router.post("/register", registerNewUser);
router.post("/loginwithgoogle", loginWithGoogle);

module.exports = router;
