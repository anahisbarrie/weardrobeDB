module.exports = function (sequelize, DataTypes) {
  var Example = sequelize.define(
    "Example", {
      brand: DataTypes.STRING,
      item_type: DataTypes.STRING,
      color: DataTypes.STRING,
      seasonality: DataTypes.STRING,
      style: DataTypes.STRING,
      price: DataTypes.STRING,
      last_worn: DataTypes.STRING,
      times_worn: DataTypes.INTEGER,
      image_link: DataTypes.STRING,
      item_description: DataTypes.TEXT
    }, {
      timestamps: false,
      freezeTableName: true
    });
  return Example;
};