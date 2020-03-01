const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const paymentRoutes = require('./routes/payment');

/** app */
const app = express();

/** db */
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => console.log('DB connected'));

/** middlewares */
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());

/** cors */
if (process.env.NODE_ENV === 'development') {
  app.use(cors({ origin: `${process.env.CLIENT_URL}` }));
}

/** routes middleware */
app.use('/api/v1', paymentRoutes);

/** routes */
app.get('/api', (req, res) => {
  res.json({
    time: Date().toString()
  });
});

/** port */
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server running ${port}`);
});
