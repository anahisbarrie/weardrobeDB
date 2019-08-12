var db = require("../models");
var uuid4 = require("uuid/v4")
//multir is for input of data and different files like picture at the same time 
var multer = require("multer");
var storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "uploaded_files/")
  },
  filename: function (req, file, callback) {
    console.log(file);
    var originalfilename = file.originalname;
    var filename = uuid4() + "_" + originalfilename
    callback(null, filename)
  }

});
var upload = multer({
  storage: storage
});
module.exports = function (app) {
  // Get all examples
  app.get("/api/examples", function (req, res) {
    db.Example.findAll({}).then(function (dbExamples) {
      res.json(dbExamples);
    });
  });


  app.post("/api/examples", upload.single("userpicture"), function (req, res) {
    console.log("data from frontend: ", req.body);
    console.log("file", req.file);
    var PORT = process.env.PORT || 3000;
    var updatedfilename = "http://localhost:" + PORT + "/uploaded_files/" + req.file.filename
    var uploadedInfo = { ...req.body, imagelink: updatedfilename }
    console.log("updated information with link ", uploadedInfo)
    db.Example.create(uploadedInfo).then(function (dbExample) {

      res.json(dbExample);
      // res.send(req.body)
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function (req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function (dbExample) {
      res.json(dbExample);
    });
  });
};