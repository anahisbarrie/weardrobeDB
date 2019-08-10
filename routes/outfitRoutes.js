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

  // Route to retrieve all clothes in the db
  app.get("/api/allClothes", function(req, res) {
    // console.log(req.body);
    db.Example.findAll({ }).then(function(dbAllClothes) {
      // console.log(dbAllClothes);
      res.json(dbAllClothes);
      res.status("outfit").send({clothes: dbAllClothes});
      // res.send("outfit",
      // {clothes: dbAllClothes});
    });
  });

  // API route to update item in db
  app.post("/api/updateItem", function(req, res) {
    var times_worn = req.body.times_worn;
    var item_ID = req.body.id;
    console.log(times_worn, item_ID);

    db.Example.update(
      {times_worn: times_worn},
      {where: {id: item_ID}}).then(function(results) {
      console.log(results)
    }).catch(error => {
      console.log(error);
    })
  });

  app.post("/api/saveOutfit", function(req, res) {

    // Set vars for each ID
    var topId = req.body.top_id;
    var bottomId = req.body.id;
    var accessoryId = req.body.id;

    // Update outfit database with ids
    db.outfit.update(
      {top_id: topId},
      {bottom_id: bottomId},
      {accessory_id: accessoryId}
      ).then(function(results){
        console.log(results)
      }).catch(error => {
        console.log(error);
      })
  });

};
