module.exports = function (sequelize, DataTypes) {
  var Example = sequelize.define(
    "Example", {
      brand: DataTypes.STRING,
      type: DataTypes.STRING,
      color: DataTypes.STRING,
      seasonality: DataTypes.STRING,
      style: DataTypes.STRING,
      price: DataTypes.STRING,
      lastworn: DataTypes.STRING,
      timesworn: DataTypes.INTEGER,
      imagelink: DataTypes.STRING,
      description: DataTypes.TEXT
    }, {
      timestamps: false
    });
  return Example;
};
