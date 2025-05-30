import mongoose from 'mongoose';

const MONGO_URI = "mongodb://localhost:27017/thrift";

// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI);
//     console.log("Connected to MongoDB✅");
//   } catch (error) {
//     console.log("Error connecting to MongoDB:❌ ", error);
//     process.exit(1);
//   }
// };

// export default connectDB;

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Connected to MongoDB✅");
  } catch (error) {
    console.log("Error connecting to MongoDB:❌ ", error);
    process.exit(1);
  }
};

export default connectDB;
