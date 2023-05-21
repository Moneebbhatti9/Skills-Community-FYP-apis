const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

const connectDB = async () => {
   hostedUrl = "mongodb://HamzaAliKundi:bcsf19e039fyp@ac-yedsc0e-shard-00-00.zl5futs.mongodb.net:27017,ac-yedsc0e-shard-00-01.zl5futs.mongodb.net:27017,ac-yedsc0e-shard-00-02.zl5futs.mongodb.net:27017/?replicaSet=atlas-umysjy-shard-0&ssl=true&authSource=admin"
   // localUrl = "mongodb://localhost:27017/jobs_available";
   try {
      const conn = await mongoose.connect(hostedUrl);
      console.log(`mongoDB connected : ${conn.connection.host}`);
   } catch (error) {
      console.log("Connected error : ", error);
      process.exit(1);
   }
};

module.exports = connectDB;
