module.exports = function (sequelize, DataTypes) {
  var Example = sequelize.define(
    "Example", {
      brand: DataTypes.STRING,
      type: DataTypes.STRING,
      color: DataTypes.STRING,
      style: DataTypes.STRING,
      price: DataTypes.STRING,
      lastwore: DataTypes.STRING,
      timesworn: DataTypes.INTEGER,
      imagelink: DataTypes.STRING,
      description: DataTypes.TEXT,
      seasonality: DataTypes.STRING
      // summer: DataTypes.STRING,
      // winter: DataTypes.STRING,
      // fall: DataTypes.STRING,
      // spring: DataTypes.STRING
    }, {
      timestamps: false,
      freezeTableName: true
    });
  return Example;
};