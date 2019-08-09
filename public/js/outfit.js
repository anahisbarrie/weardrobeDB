// Outfit object
var OutfitData = {
  saveOutfit: function(selectedOutfit) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/top",
      data: JSON.stringify(saveOutfit)
    });
  },
  getOutfits: function() {
    return $.ajax({
      url: "api/allClothes",
      type: "GET"
    });
  },
  deleteOutfit: function(id) {
    return $.ajax({
      url: "api/examples/" + id,
      type: "DELETE"
    });
  }
};

// Function to get a random outfit
var generateOutfit = () => OutfitData.getOutfits().then(function(data) {

  // Clear out images
  $("#topOutfit").empty();
  $("#bottomOutfit").empty();
  $("#accessoryOutfit").empty();

  // console.log("Data!" + JSON.stringify(data));

  // Get arrays of top, bottom, and accessory
  var top = filter(data, "Top");
  var bottom = filter(data, "Bottom");
  var accessory = filter(data,"Accessories");

  // Randomize Outfit
  // Top
  var topRandom = getRandom(top);

  // Bottom
  var bottomRandom = getRandom(bottom);

  // Accessory
  var accessoryRandom = getRandom(accessory);

  // Append images
  // Top
  var topImg = $("<img width=400 height=200>");
  topImg.attr("src", topRandom.image_link);
  $("#topOutfit").append(topImg);

  // Bottom
  var bottomImg = $("<img width=400 height=200>");
  bottomImg.attr("src", bottomRandom.image_link);
  $("#bottomOutfit").append(bottomImg);

  // Accessory
  var accessoryImg = $("<img width=300 height=150>");
  accessoryImg.attr("src", accessoryRandom.image_link);
  $("#accessoryOutfit").append(accessoryImg);




  // SAVE BUTTON
  // var bottomID = bottomRandom.id;

  // var bottomCounter = bottomRandom.times_worn
  // bottomCounter++;
  // $.ajax({
  //   headers: {
  //     "Content-Type": "application/json"
  //   },
  //   type: "POST",
  //   url: "/api/updateItem",
  //   data: JSON.stringify({
  //     times_worn: bottomCounter,
  //     id: bottomID
  //   })
  // });

});

// Function to filter for item type
var filter = function(data, filter) {
  console.log("hi!");
  var pick = [];

  // For every filtered item, push into array
  data.forEach(e => {
    if (e.item_type === filter) {
      // console.log(e);
      pick.push(e);
    }
  })
  console.log(pick);
  return pick;

  // for (var i = 0; i < data.length; i ++) {
  //   if (data[i].item_type === filter) {
  //     keep.push(data[i]);
  //   }
  //   console.log("Data:", data[i]);
  // }
  // console.log("PICK", pick);
  // return pick;
}

var getRandom = function(data) {
  return data[Math.floor(Math.random()*data.length)];
}

// CHANGE THE FUNCTIONS

// var testFunc = OutfitData.getOutfits().then(function(data) {
//   console.info(data)
// });

// On-click to generate daily outfit
$("#generateOutfitBtn").on("click", generateOutfit);
  
// // On-click to generate the next outfit (same as above)
// $("#nextOutfitBtn").on("click", function() );

// // On-click to save the daly outfit
$("#saveOutfitBtn").on("click", function() {
  OutfitData.saveOutfit(selectedOutfit)
});

// for saveOutfit - pass each object into saveOutfit
