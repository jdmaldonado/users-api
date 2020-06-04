const createError = require('http-errors');
const cors = require('cors');
const express = require('express');
const app = express();

const port = 3000;

/** Routes */
const usersRouter = require('./routes/users');
const tasksRouter = require('./routes/tasks');

app.use(cors({ origin: true }));
app.use(express.json());

/** Routes config */
app.use('/users', usersRouter);
app.use('/tasks', tasksRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

app.listen(port, () => console.log(`This amazing app is listening at http://localhost:${port}`))

module.exports = app;
