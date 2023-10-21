const { userRouter } = require('./entities/users/user.routes');
const { sendMiddleware } = require('./middlewares/send.middleware');
const { errorMiddleware } = require('./middlewares/error.middleware');

const routes = (app) => {
  app.use(sendMiddleware);

  app.use('/api/user', userRouter);

  app.use(errorMiddleware);
}

exports.routes = routes;
