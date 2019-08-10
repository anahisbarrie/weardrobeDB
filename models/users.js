/* eslint-disable camelcase */
// For password hashing
var bcrypt = require("bcryptjs");

// User model
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define(
    "User",
    {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      // last_login_date: DataTypes.DATE
    },
    {
      timestamps: false
    }
  );

  // Checks unhashed vs hashed pw in db
  User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };

  // Hash PW before creation
  // User.hook("beforeCreate", function(user){
  //   user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  // });

  User.beforeCreate(function(user, options){
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  });

  return User;
};
