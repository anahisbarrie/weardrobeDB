/* eslint-disable camelcase */
var db = require("../models");

module.exports = function(app) {
  app.get("/api/top", function(req, res) {
    // console.log(req.body);
    db.Example.findAll({ where: { type: "Top" } }).then(function(dbTop) {
      res.json(dbTop);
      console.log(dbTop);
    });
  });

  app.get("/api/bottom", function(req, res) {
    db.Example.findAll({ where: { type: "Bottom" } }).then(function(
      dbBottom
    ) {
      res.json(dbBottom);
      console.info(dbBottom);
    });
  });

  app.get("/api/accessories", function(req, res) {
    db.Example.findAll({ where: { type: "Accessories" } }).then(function(
      dbAccessories
    ) {
      res.json(dbAccessories);
      console.log(dbAccessories);
    });
  });

  app.get("/api/allClothes", function(req, res) {
    // console.log(req.body);
    db.Example.findAll({ }).then(function(dbAllClothes) {
      res.json(dbAllClothes);
      console.log(dbAllClothes);
    });
  });
};
