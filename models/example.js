module.exports = function(sequelize, DataTypes) {
  var Example = sequelize.define("Example", {
    brand: DataTypes.STRING,
    type: DataTypes.STRING,
    color: DataTypes.STRING,
    style: DataTypes.STRING,
    price: DataTypes.STRING,
    lastwore: DataTypes.STRING,
    imagelink: DataTypes.STRING,
    description: DataTypes.TEXT
  });
  return Example;
};
