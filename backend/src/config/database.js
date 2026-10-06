const mongoose = require("mongoose");
const { mongoUri } = require("./env");

const connectDatabase = async () => {
  console.log(mongoUri)
  try {
    await mongoose.connect("mongodb://localhost:27017/Travel");
    console.log(`[DB] Connected to MongoDB: ${mongoUri}`);
  } catch (error) {
    console.error("[DB] Connection failed:", error.message);
    process.exit(1);
  }
};

module.exports = { connectDatabase };
