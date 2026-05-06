const User = require("../model/user.model");

const assignRole = async (userId, userData) => {
  const user = await User(userId);

  user.type = await userData;
  user.save();
  return user;
};

module.exports = assignRole;
