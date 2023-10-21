const { userService } = require('./user.service.js');

class UserController {
  async updateBalance(req, res, next) {
    try {
      const { amount } = req.body;
      const { userId } = req.params;

      const user = await userService.updateBalance(userId, amount);

      res.success(200, user);
    } catch (e) {
      next(e);
    }
  }
}

exports.userController = new UserController();
