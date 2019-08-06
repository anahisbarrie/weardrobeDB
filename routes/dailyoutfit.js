/* eslint-disable camelcase */
var db = require("../models");

module.exports = function(app) {
  app.get("/api/top", function(req, res) {
    // console.log(req.body);
    db.Clothes.findAll({ where: { item_type: "Top" } }).then(function(dbTop) {
      res.json(dbTop);
      console.log(dbTop);
    });
  });

  app.get("/api/bottom", function(req, res) {
    db.Clothes.findAll({ where: { item_type: "Bottom" } }).then(function(
      dbBottom
    ) {
      res.json(dbBottom);
      console.info(dbBottom);
    });
  });

  app.get("/api/accessories", function(req, res) {
    db.Clothes.findAll({ where: { item_type: "Accessories" } }).then(function(
      dbAccessories
    ) {
      res.json(dbAccessories);
      console.log(dbAccessories);
    });
  });
};
