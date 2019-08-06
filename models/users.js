/* eslint-disable camelcase */
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define(
    "User",
    {
      user_name: DataTypes.STRING,
      user_email: DataTypes.STRING,
      user_pw: DataTypes.STRING,
      last_login_date: DataTypes.DATE
    },
    {
      timestamps: false
    }
  );
  return User;
};
