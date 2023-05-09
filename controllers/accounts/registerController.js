const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const RegisterUser = require("../../models/account/registerModel");

const registerNewUser = asyncHandler(async (req, res) => {
   const { registerAs, email, password } = req.body;

   // if (!registerAs || !email || !password) {
   //    res.status(400);
   //    throw new Error("Please add all fields");
   // }

   //  **Checking if user already register with the same email or not
   const userExists = await RegisterUser.findOne({ email });

   if (userExists) {
      res.status(400);
      throw new Error("User alredy register with thie Email address");
   }

   //  **Encrypting password
   const salt = await bcrypt.genSalt(10);
   const encryptedPassword = await bcrypt.hash(password, salt);

   //  **Creating new user
   const newUser = await RegisterUser.create({
      registerAs: registerAs,
      email: email,
      password: encryptedPassword,
   });

   //  **Sending response back to user including JSON_WEB_TOKEN
   if (newUser) {
      res.status(201).json({
         _id: newUser.id,
         registerAs: newUser.registerAs,
         email: newUser.email,
         token: generateToken(newUser._id, newUser.registerAs, newUser.email),
      });
   } else {
      res.status(400);
      throw new Error("Invalid user Data");
   }
});

//  **Generating a Token Function
const generateToken = (id, registerAs, email) => {
   return jwt.sign({ id, registerAs, email }, "tokenSecretKey123", {
      expiresIn: "30d",
   });
};

module.exports = {
   registerNewUser,
};
