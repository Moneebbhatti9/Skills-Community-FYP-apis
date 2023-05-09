const asyncHandler = require("express-async-handler");
const CompanyProfile = require("../../models/CompanyModel/companyProfile");
const CompanyProfileLogo = require("../../models/CompanyModel/companyProfileLogo");
const CompanyProfileSocial = require("../../models/CompanyModel/companyProfileLinks");
const CompanyProfileContactInfo = require("../../models/CompanyModel/companyProfileContactInfo");

const companyProfile = asyncHandler(async (req, res) => {
   const {
      comapnyName,
      emialAddress,
      phone,
      website,
      estSince,
      teamSize,
      aboutCompany,
      userId,
   } = req.body;

   const exist = await CompanyProfile.findOne({ userID: userId });

   if (exist) {
      const updatedProfile = await CompanyProfile.findOneAndUpdate(
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
      const profile = await CompanyProfile.create({
         comapnyName: comapnyName,
         emialAddress: emialAddress,
         phone: phone,
         website: website,
         estSince: estSince,
         teamSize: teamSize,
         aboutCompany: aboutCompany,
         userID: req.user.id,
         userId: userId,
      });

      try {
         res.status(200).json(profile);
      } catch (error) {
         console.log("Error while creating profile", error);
      }
   }

   return;
});

const getCompanyInfo = asyncHandler(async (req, res) => {
   const companyInfo = await CompanyProfile.find({ userID: req.params.id });
   res.status(200).json(companyInfo);
});

const getCompanyInfoPublic = asyncHandler(async (req, res) => {
   const companyInfo = await CompanyProfile.find({ userID: req.params.id });
   res.status(200).json(companyInfo);
});

const companyProfileSocialLinks = asyncHandler(async (req, res) => {
   const { twitter, facebook, linkedIn, googlePlus, userId } = req.body;

   const exist = await CompanyProfileSocial.findOne({ userID: userId });

   if (exist) {
      const updatedProfile = await CompanyProfileSocial.findOneAndUpdate(
         { userID: userId },
         req.body,
         {
            new: true,
         }
      );
      try {
         res.status(201).json(updatedProfile);
      } catch (error) {
         console.log("Error while creating profile", error);
      }
   } else {
      const socialLinks = await CompanyProfileSocial.create({
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

const getCompanyInfoSocial = asyncHandler(async (req, res) => {
   const companyInfo = await CompanyProfileSocial.find({
      userID: req.params.id,
   });
   res.status(200).json(companyInfo);
});

const getCompanyInfoLinksPublic = asyncHandler(async (req, res) => {
   const companyInfo = await CompanyProfileSocial.find({
      userID: req.params.id,
   });
   res.status(200).json(companyInfo);
});

const companyProfileContactInfo = asyncHandler(async (req, res) => {
   const { city, country, address, userId } = req.body;

   const exist = await CompanyProfileContactInfo.findOne({ userID: userId });

   if (exist) {
      const updatedProfile = await CompanyProfileContactInfo.findOneAndUpdate(
         { userID: userId },
         req.body,
         { new: true }
      );

      try {
         res.status(201).json(updatedProfile);
      } catch (error) {
         console.log("Error while creating profile", error);
      }
   } else {
      const contactInfo = await CompanyProfileContactInfo.create({
         city: city,
         country: country,
         address: address,
         userID: req.user.id,
         userId: userId,
      });

      try {
         res.status(201).json(contactInfo);
      } catch (error) {
         console.log("Error while creating profile", error);
      }
   }
});

const getCompanyContactInfo = asyncHandler(async (req, res) => {
   const companyInfo = await CompanyProfileContactInfo.find({
      userID: req.params.id,
   });

   res.status(201).json(companyInfo);
});

const getCompanyContactInfoPublic = asyncHandler(async (req, res) => {
   const companyInfo = await CompanyProfileContactInfo.find({
      userID: req.params.id,
   });

   res.status(201).json(companyInfo);
});

const companyProfileLogo = asyncHandler(async (req, res) => {
   const { logo, userId } = req.body;

   const exist = await CompanyProfileLogo.findOne({ userID: userId });

   if (exist) {
      const updatedProfile = await CompanyProfileLogo.findOneAndUpdate(
         { userID: userId },
         req.body,
         { new: true }
      );

      try {
         res.status(201).json(updatedProfile);
      } catch (error) {
         console.log("Error while creating profile", error);
      }
   } else {
      const companyLogo = await CompanyProfileLogo.create({
         logo: logo,
         userId: userId,
         userID: req.user.id,
      });

      try {
         res.status(201).json(companyLogo);
      } catch (error) {
         console.log("Error while creating profile Logo", error);
      }
   }
});

const getCompanyPorifleLogo = asyncHandler(async (req, res) => {
   const companyLogo = await CompanyProfileLogo.findOne({
      userID: req.params.id,
   });

   res.status(200).json({ message: "Get company Profile Logo", companyLogo });
});

const getCompanyProfileLogoPublic = asyncHandler(async (req, res) => {
   const companyLogo = await CompanyProfileLogo.findOne({
      userID: req.params.id,
   });

   res.status(200).json({ message: "Get company Profile Logo", companyLogo });
});

module.exports = {
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
};
