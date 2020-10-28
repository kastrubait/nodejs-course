const mongoose = require('mongoose');
const { MONGO_CONNECTION_STRING } = require('../src/common/config');

const connectToDB = cb => {
  mongoose.connect(MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  });

  const db = mongoose.connection;

  db.on('error', () =>
    console.error.bind(console, 'MongoDB connection error:')
  ).once('open', async () => {
    console.log('Successfully connecr to DB');
    // db.dropDatabase();
    cb();
  });
};

module.exports = { connectToDB };
