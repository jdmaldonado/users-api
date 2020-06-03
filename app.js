const createError = require('http-errors');
const cors = require('cors');
const express = require('express');
const app = express();

const port = 3000;

/** Routes */
const usersRouter = require('./routes/users');

app.use(cors({ origin: true }));
app.use(express.json());

app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

app.listen(port, () => console.log(`This amazing app is listening at http://localhost:${port}`))

module.exports = app;
