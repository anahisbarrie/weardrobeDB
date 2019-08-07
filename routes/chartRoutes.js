var db = require("../models");

module.exports = function (app) {
  // BACKEND: Get all examples and order them by top 5 most worn 
  app.get("/api/statistics", function (req, res) {
    console.log(`response: ${res}`)
    db.Clothes.findAll({
      order: [
        ['times_worn', 'DESC']],
      limit: 5
    })
  }).then(function (dbClothes) {
    console.log(`DB: `, dbClothes)
    res.json(dbClothes);;
  });
};