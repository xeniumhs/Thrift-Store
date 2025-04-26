import mongoose from 'mongoose';

const mongoURI = "mongodb://localhost:27017/thrift";

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("Connected to MongoDB✅");
  } catch (error) {
    console.log("Error connecting to MongoDB:❌ ", error);
    process.exit(1);
  }
};

// Call the connectDB function
connectDB();

export default mongoose;
