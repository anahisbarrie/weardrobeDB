/* eslint-disable camelcase */
module.exports = function(sequelize, DataTypes) {
    var Outfit = sequelize.define(
      "Outfit",
      {
        date: DataTypes.DATE,
        top_id: DataTypes.INTEGER,
        bottom_id: DataTypes.INTEGER,
        accessory_id: DataTypes.INTEGER,
        user_id: DataTypes.INTEGER,
      },
      {
        timestamps: false
      }
    );
    return Outfit;
  };