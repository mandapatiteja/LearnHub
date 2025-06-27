const mongoose = require('mongoose');
require('dotenv').config();
const dbURI = process.env.MONGODB_URI || 'mongodb+srv://username:password@cluster0.bzjtj.mongodb.net/'; // Replace with your actual URI

const dbConnect = () => {
  mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    throw new Error(`Could not connect to MongoDB: ${err}`);
  });
}

module.exports = dbConnect
