/* eslint-disable camelcase */
module.exports = function(sequelize, DataTypes) {
    var Outfit = sequelize.define(
      "Outfit",
      {
        date: DataTypes.DATE,
        top_id: DataTypes.INT,
        bottom_id: DataTypes.INT,
        accessory_id: DataTypes.INT,
        user_id: DataTypes.INT,
      },
      {
        timestamps: false
      }
    );
    return Outfit;
  };