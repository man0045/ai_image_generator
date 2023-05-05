//jshint esversion:6

import mongoose from 'mongoose';

const connectDB = (url) => {
  mongoose.set('strictQuery', true);
  mongoose.connect(url)
    .then(() => console.log('Yay! We have connected to mongo.'))
    .catch((err) => {
      console.error('Alas! Failed to connect with mongo');
      console.error(err);
    });
};

export default connectDB;