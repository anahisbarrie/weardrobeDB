module.exports = function(sequelize, DataTypes) {
  var Example = sequelize.define("Example", {
    text: DataTypes.STRING,
    text2: DataTypes.STRING,
    description: DataTypes.TEXT
  });
  return Example;
};
