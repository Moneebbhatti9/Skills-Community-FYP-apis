const asyncHandler = require("express-async-handler");
const CandidateProfile = require("../../models/CandidaiteProfileModel/candidateProfile");
const CandidateProfileLogo = require("../../models/CandidaiteProfileModel/candidateProfileLogo");
const CandidateProfileSocial = require("../../models/CandidaiteProfileModel/candidateProfileLinks");
const CandidateProfileContactInfo = require("../../models/CandidaiteProfileModel/candidateProfileContactInfo");

const candidateProfile = asyncHandler(async (req, res) => {
   const { userId } = req.body;
   
   const exist = await CandidateProfile.findOne({ userID: userId });

   if (exist) {
      const updatedProfile = await CandidateProfile.findOneAndUpdate(
         { userID: userId },
         req.body,
         {
            new: true,
         }
      );
      try {
         res.status(200).json(updatedProfile);
      } catch (error) {
         console.log("Error while creating profile", error);
      }
   } else {
      const candidateProfile = await CandidateProfile.create({
         fullName: req.body.fullName,
         jobTitle: req.body.jobTitle,
         phone: req.body.phone,
         email: req.body.email,
         website: req.body.website,
         currentSalary: req.body.currentSalary,
         expectedSalary: req.body.expectedSalary,
         experience: req.body.experience,
         age: req.body.age,
         educationLevel: req.body.educationLevel,
         languages: req.body.languages,
         description: req.body.description,
         resume: req.body.resume,
         userID: req.user.id,
         userId: userId,
      });

      res.status(201).json(candidateProfile);
   }
   return;
});

const getCandidateInfo = asyncHandler(async (req, res) => {
   const candidateInfo = await CandidateProfile.find({ userID: req.params.id });
   res.status(200).json(candidateInfo);
});

const getCandidateSocial = asyncHandler(async (req, res) => {
   const candidateInfo = await CandidateProfileSocial.find({
      userID: req.params.id,
   });
   res.status(200).json(candidateInfo);
});

const CandidateProfileSocialLinks = asyncHandler(async (req, res) => {
   const { twitter, facebook, linkedIn, googlePlus, userId } = req.body;

   const exist = await CandidateProfileSocial.findOne({ userID: userId });

   if (exist) {
      const updatedProfile = await CandidateProfileSocial.findOneAndUpdate(
         { userID: userId },
         req.body,
         {
            new: true,
         }
      );
      try {
         res.status(200).json(updatedProfile);
      } catch (error) {
         console.log("Error while creating profile", error);
      }
   } else {
      const socialLinks = await CandidateProfileSocial.create({
         twitter: twitter,
         facebook: facebook,
         linkedIn: linkedIn,
         googlePlus: googlePlus,
         userID: req.user.id,
         userId: userId,
      });

      try {
         res.status(200).json(socialLinks);
      } catch (error) {
         console.log("Error while creating profile", error);
      }
   }
});

const candidateProfileContactInfo = asyncHandler(async (req, res) => {
   const { city, country, address, userId } = req.body;

   const exist = await CandidateProfileContactInfo.findOne({ userID: userId });

   if (exist) {
      const updatedProfile = await CandidateProfileContactInfo.findOneAndUpdate(
         { userID: userId },
         req.body,
         {
            new: true,
         }
      );

      try {
         res.status(200).json(updatedProfile);
      } catch (error) {
         console.log("Error while creating profile", error);
      }
   } else {
      const contactInfo = await CandidateProfileContactInfo.create({
         city: city,
         country: country,
         address: address,
         userID: req.user.id,
         userId: userId,
      });

      try {
         res.status(200).json(contactInfo);
      } catch (error) {
         console.log("Error while creating profile", error);
      }
   }
});

const getCandidateProfileContactInfo = asyncHandler(async (req, res) => {
   const contactInfo = await CandidateProfileContactInfo.find({
      userID: req.params.id,
   });

   res.status(200).json(contactInfo);
});

const candidateProfileLogo = asyncHandler(async (req, res) => {
   const { userId, logo } = req.body;

   const exist = await CandidateProfileLogo.findOne({ userID: userId });

   if (exist) {
      const updatedProfile = await CandidateProfileLogo.findOneAndUpdate(
         { userID: userId },
         req.body,
         {
            new: true,
         }
      );

      try {
         res.status(200).json(updatedProfile);
      } catch (error) {
         console.log("Error while creating profile logo", error);
      }
   } else {
      const candidateLogo = await CandidateProfileLogo.create({
         logo: logo,
         userId: userId,
         userID: req.user.id,
      });

      try {
         res.status(201).json({
            message: "Candidate Profile Logo",
            candidateLogo,
         });
      } catch (error) {
         console.log("Error while creating candidate profile Logo", error);
      }
   }
});

const getCandidateProfileLogo = asyncHandler(async (req, res) => {
   const candidateLogo = await CandidateProfileLogo.findOne({
      userID: req.params.id,
   });

   res.status(200).json({ message: "Candidate Logo", candidateLogo });
});

module.exports = {
   candidateProfile,
   getCandidateInfo,
   CandidateProfileSocialLinks,
   getCandidateSocial,
   candidateProfileContactInfo,
   getCandidateProfileContactInfo,
   candidateProfileLogo,
   getCandidateProfileLogo,
};
