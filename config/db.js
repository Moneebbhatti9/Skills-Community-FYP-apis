const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

const connectDB = async () => {
   try {
      const conn = await mongoose.connect("mongodb+srv://HamzaAliKundi:bcsf19e039fyp@cluster0.zl5futs.mongodb.net/");
      console.log(`mongoDB connected : ${conn.connection.host}`);
   } catch (error) {
      console.log("Connected error : ", error);
      process.exit(1);
   }
};

module.exports = connectDB;
