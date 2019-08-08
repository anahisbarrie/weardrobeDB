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
  getOutfit: function() {
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
OutfitData.getOutfit().then(function(data) {
  console.log("Data!" + JSON.stringify(data));
  var bottom = filter(data, "Bottom");
  var top = filter(data, "Top");
  var accessory = filter(data,"Accessories");
  // console.info("tops:" + JSON.stringify(tops));
  // console.info("bottoms:" + JSON.stringify(bottom));
  // console.info("accessories:" + JSON.stringify(accessories));
  console.info("Random bottom: " + JSON.stringify(getRandom(bottom)));
  console.info("Random top: " + JSON.stringify(getRandom(top)));
  console.info("Random accessory: " + JSON.stringify(getRandom(accessory)));
  console.info("Random bottom: " + JSON.stringify(getRandom(bottom)));
});

// Function to filter for item type
var filter = function(data, filter) {
  var pick = [];
  for (var i = 0; i < data.length; i ++) {
    if (data[i].type === filter) {
      keep.push(data[i]);
    }
  }
  return pick;
}

var getRandom = function(data) {
  return data[Math.floor(Math.random()*data.length)];
}


// CHANGE THE FUNCTIONS

// On-click to generate daily outfit
// $("#generateOutfitBtn").on("click", function() );
// // On-click to generate the next outfit (same as above)
// $("#nextOutfitBtn").on("click", function() );
// // On-click to save the daly outfit
// $("#saveOutfitBtn").on("click", function() );

// for saveOutfit - pass each object into saveOutfit
