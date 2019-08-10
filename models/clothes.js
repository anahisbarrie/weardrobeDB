/* eslint-disable camelcase */
module.exports = function(sequelize, DataTypes) {
  var Clothes = sequelize.define(
    "Clothes",
    {
      brand: DataTypes.STRING,
      type: DataTypes.STRING,
      color: DataTypes.STRING,
      seasonality: DataTypes.STRING,
      style: DataTypes.STRING,
      price: DataTypes.STRING,
      lastwore: DataTypes.STRING,
      timesworn: DataTypes.INTEGER,
      imagelink: DataTypes.STRING,
      description: DataTypes.TEXT
    },
    {
      timestamps: false,
      freezeTableName: true
    }
  );
  return Clothes;
};
