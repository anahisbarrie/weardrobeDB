
// ///////////////////////////////////////////////////////
var chai = require("chai");
var chaiHttp = require("chai-http");
var server = require("../server");
var db = require("../models");
var expect = chai.expect;
const { readFileSync } = require("fs");

// // Setting up the chai http plugin
chai.use(chaiHttp);
var request;
describe("GET /api/examples", function () {
  // Before each test begins, create a new request server for testing
  // & delete all examples from the db
  beforeEach(function () {
    request = chai.request(server);
    return db.sequelize.sync({ force: true });
  });

  it("should find all examples", function (done) {
    // Add some examples to the db to test with
    db.Example.bulkCreate([
      {
        brand: "gucci",
        type: "handbag",
        color: "blue",
        style: "pants",
        price: "98",
        lastwore: "21/21/2019",
        imagelink: "kshjf.png",
        description: "texting dummy data"
      }
    ]).then(function () {
      // Request the route that returns all examples
      request.get("/api/examples").end(function (err, res) {
        expect(res.body[0])
          .to.be.an("object")
          .that.includes({
            brand: "gucci",
            type: "handbag",
            color: "blue",
            style: "pants",
            price: "98",
            lastwore: "21/21/2019",
            imagelink: "kshjf.png",
            description: "texting dummy data"
          });

        // The `done` function is used to end any asynchronous tests
        done();
      });
    });
  });
});
/////////////////////////////////////////////////////////////////////////////

describe("POST/api/examples", function () {
  // Before each test begins, create a new request server for testing
  // & delete all examples from the db
  beforeEach(function () {
    request = chai.request(server);
    return db.sequelize.sync({ force: true });
  });

  it("should verify POST method", function (done) {
    // Request the route that returns all examples

    var requestbody = {
      brand: "gucci",
      type: "handbag",
      color: "blue",
      style: "pants",
      price: "98",
      lastwore: "21/21/2019",
      description: "texting dummy data",
    }
    console.log("----------------------------------------------")
    request.post("/api/examples")
      .field("brand", "gucci")
      .field("type", "handbag")
      .field("color", "blue")
      .field("style", "pants")
      .field("price", "98")
      .field("lastwore", "21/21/2019")
      .attach("userpicture", readFileSync("./uploaded_files/test.png"), "test.png")
      // .field("imagelink", 'test.png')
      .field("description", "texting dummy data")
      // .send(requestbody) // inmstead of .send....
      .end(function (err, res) {
        console.log(res.body);
        // console.log('error object', err);

        expect(res.body)
          .to.be.an("object")
          .that.includes(requestbody);
        ////////////////////////////////////////////
        // The `done` function is used to end any asynchronous tests
        expect(res.body.imagelink).to.include("test.png")
        done();
      });
  });
});