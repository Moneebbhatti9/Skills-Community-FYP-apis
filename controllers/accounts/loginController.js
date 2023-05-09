const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const RegisterUser = require("../../models/account/registerModel");

const login = asyncHandler(async (req, res) => {
   const { email, password } = req.body;

   //  **Checking if user already register with the same email or not
   const userExists = await RegisterUser.findOne({ email });

   //  **Sending response back to user including JSON_WEB_TOKEN
   if (userExists && (await bcrypt.compare(password, userExists.password))) {
      res.status(200).json({
         _id: userExists.id,
         registerAs: userExists.registerAs,
         email: userExists.email,
         token: generateToken(
            userExists._id,
            userExists.registerAs,
            userExists.email
         ),
      });
   } else {
      res.status(400);
      throw new Error("Invalid Credientals");
   }
});

//  **Generating a Token Function
const generateToken = (id, registerAs, email) => {
   return jwt.sign({ id, registerAs, email }, "tokenSecretKey123", {
      expiresIn: "30d",
   });
};

module.exports = {
   login,
};
