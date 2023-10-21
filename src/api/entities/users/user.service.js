const { ApiError } = require('../../api.error.js');
const { db } = require('../../../db.js');
const { User } = require('../../../models/user.js');

class UserService {
  async updateBalance(userId, amount) {
    const t = await db.transaction();

    const user = await User.findByPk(userId, { transaction: t });
    if (!user) {
      throw ApiError.NotFound('User not found');
    }

    const _amount = Math.abs(amount);

    if (user.balance === 0 || user.balance - _amount < 0) {
      await t.rollback();
      throw ApiError.UnprocessableEntity('Insufficient balance');
    }

    user.balance -= _amount;
    await user.save({ transaction: t });

    await t.commit();

    return user;
  }
}

exports.userService = new UserService();
