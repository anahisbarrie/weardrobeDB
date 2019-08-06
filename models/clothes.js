/* eslint-disable camelcase */
module.exports = function(sequelize, DataTypes) {
  var Clothes = sequelize.define(
    "Clothes",
    {
      brand_name: DataTypes.STRING,
      item_type: DataTypes.STRING,
      item_color: DataTypes.STRING,
      item_style: DataTypes.STRING,
      price: DataTypes.FLOAT,
      last_worn: DataTypes.DATE,
      times_worn: DataTypes.INTEGER,
      clothing_image: DataTypes.STRING
    },
    {
      timestamps: false
    }
  );
  return Clothes;
};
