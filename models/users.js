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
    },
    {
      timestamps: false
    }
  );


  // Checks unhashed vs hashed pw in db
  // User.prototype.validPassword = function(password) {
  //   return bcrypt.compareSync(password, this.password);
  // };

  // User.beforeCreate(function(user, options){
  //   return user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  // });

  return User;
};
