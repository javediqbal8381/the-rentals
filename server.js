const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const dbconnecton = require('./db');

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use('/api/cars', require('./routes/carsRoute'));
app.use('/api/users', require('./routes/usersRoute'));
app.use('/api/bookings', require('./routes/bookingsRoute'));
app.use('/api/autocare', require('./routes/autocareRoute'));

if (process.env.NODE_ENV === 'production') {
  const path = require('path');


  app.get('/', (req, res) => {
    app.use(express.static(path.resolve(__dirname, 'client', 'build')))
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(port, () => {
  console.log(`node js server started at port ${port}`);
});
