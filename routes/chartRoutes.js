var db = require("../models");

module.exports = function (app) {
  // BACKEND: Get all examples and order them by top 5 most worn 
  app.get("/api/topfive", function (req, res) {
    db.Clothes.findAll({
      order: [
        ['times_worn', 'DESC']
      ],
      limit: 5
    }).then(function (dbClothes) {
      res.json(dbClothes);
    })
  });

  //Get all examples with seasonality data and send them to front end
  app.get("/api/seasonality", function (req, res) {
    db.Clothes.findAll({}).then(function (dbClothes) {
      res.json(dbClothes);
    });
  })

  //Get all examples with type data and send them to front end
  app.get("/api/type", function (req, res) {
    db.Clothes.findAll({}).then(function (dbClothes) {
      res.json(dbClothes);;
    })
  });

  //Get all examples with least worn and send them to front end
  app.get("/api/leastworn", function (req, res) {
    db.Clothes.findAll({
      order: [
        ['times_worn']
      ],
      limit: 5
    }).then(function (dbClothes) {
      res.json(dbClothes);
    })
  });
};