const expressAsyncHandler = require("express-async-handler");
const ContactUsModel = require("../../models/contactus/contactUsModel");

// **Post ContactUs Handler
const contactUs = expressAsyncHandler(async (req, res) => {
   const { name, email, subject, yourMessage } = req.body;

   if (!name || !email || !subject || !yourMessage) {
      res.status(400);
      throw new Error("Please Add all fields");
   }

   try {
      const contactUsData = await ContactUsModel.create({
         name: name,
         email: email,
         subject: subject,
         yourMessage: yourMessage,
      });

      res.status(200).json(contactUsData);
   } catch (error) {
      console.log("Error While Contact Us : ", error);
   }
});

module.exports = {
   contactUs,
};
