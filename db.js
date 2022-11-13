const mongoose = require('mongoose');

function connectDB() {
  mongoose.connect(
    'mongodb+srv://rentacar:rentacar@cluster0.56zww.mongodb.net/rentacar',
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }
  );

  const connection = mongoose.connection;

  connection.on('connected', () => {
    console.log('mongo db connecton successful');
  });

  connection.on('error', () => {
    console.log('mongo DB connection connection error');
  });
}

connectDB();

module.exports = mongoose;
