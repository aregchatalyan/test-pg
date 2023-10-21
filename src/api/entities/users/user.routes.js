const { Router } = require('express');
const { userController } = require('./user.controller.js');

const userRouter = Router();

userRouter.put('/update-balance/:userId',
  userController.updateBalance
);

exports.userRouter = userRouter;
