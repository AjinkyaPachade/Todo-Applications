const mongoose = require('mongoose');
const dotenv = require('dotenv');

require('dotenv').config();


console.log('MONGO_URI:', process.env.MONGO_URI); // This should output the MongoDB URI

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};


module.exports = connectDB;

