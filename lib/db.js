import mongoose from "mongoose";

async function connectToMongoDB() {
  const uri = process.env.MONGO_URI;
  const dataBase = process.env.MONGO_COLLECTION;
  // Replace with your MongoDB connection string

  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: dataBase,
    });
    console.log("Connected to MongoDB");

    // Perform database operations here
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  } finally {
    await mongoose.disconnect();
    console.log("Disconnected from MongoDB");
  }
}

export default connectToMongoDB;
