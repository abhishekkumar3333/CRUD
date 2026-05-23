import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");
    return conn;
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;


// PORT=5000
// MONGO_URI=mongodb://abhishekatter3_db_user:vK1S99vd5SRaCW00@ac-ekvcjtk-shard-00-00.sezhlqm.mongodb.net:27017,ac-ekvcjtk-shard-00-01.sezhlqm.mongodb.net:27017,ac-ekvcjtk-shard-00-02.sezhlqm.mongodb.net:27017/?ssl=true&replicaSet=atlas-ybuxxo-shard-0&authSource=admin&appName=crud
// JWT_SECRET=your_secret_key_change_in_production
