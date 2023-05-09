const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const asyncHandler = require("express-async-handler");
const { OAuth2Client } = require("google-auth-library");
const registerUser = require("../../models/account/registerModel");

const client = new OAuth2Client(
   "955522408366-cb5oi5a57hjuln2rr07gh514bms52g8t.apps.googleusercontent.com"
);

const loginWithGoogle = asyncHandler(async (req, res) => {
   const { tokenId } = req.body;

   client
      .verifyIdToken({
         idToken: tokenId,
         audience:
            "955522408366-cb5oi5a57hjuln2rr07gh514bms52g8t.apps.googleusercontent.com",
      })
      .then((response) => {
         const { email_verified, name, email } = response.payload;

         if (email_verified) {
            registerUser.findOne({ email }).exec((err, user) => {
               if (err) {
                  return res.status(400).json({
                     error: "Something went wrong ...",
                  });
               } else {
                  if (user) {
                     // **Generating token for localstorage for the frotend
                     const token = jwt.sign(
                        { id: user._id, name: user.name, email: user.email },
                        "tokenSecretKey123",
                        { expiresIn: "30d" }
                     );

                     const { _id, name, email } = user;

                     // ** Sending response back to frontend after login with Google if user has alredy been registered
                     return res.status(200).json({
                        token,
                        user: { _id, name, email },
                     });
                  } else {
                     // **Generating unique password and encrypt it
                     let password = email + "tokenSecretKey123";
                     const salt = bcrypt.genSalt(10);
                     const hashedPassword = bcrypt.hash(password, salt);

                     // **Creating a new user
                     let newUser = new registerUser({
                        name: name,
                        email: email,
                        password: hashedPassword,
                     });

                     newUser.save((err, data) => {
                        if (err) {
                           return res.status(400).json({
                              error: "Something went wrong ...",
                           });
                        } else {
                           // **Generating token for localstorage for the frotend
                           const token = jwt.sign(
                              {
                                 id: data._id,
                                 name: data.name,
                                 email: data.email,
                              },
                              "tokenSecretKey123",
                              { expiresIn: "30d" }
                           );

                           const { _id, name, email } = newUser;

                           // ** Sending response back to frontend after user has registered
                           return res.status(200).json({
                              token,
                              user: { _id, name, email },
                           });
                        }
                     });
                  }
               }
            });
         }
      });
});

module.exports = {
   loginWithGoogle,
};
