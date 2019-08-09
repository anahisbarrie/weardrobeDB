// Outfit object
var OutfitData = {
  saveOutfit: function(selectedOutfit) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/saveOutfit",
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

// Initialize var
var topObject;
var bottomObject;
var accessoryObject;

// console.log(topObject, bottomObject, accessoryObject);

// Function to get a random outfit
var generateOutfit = () => OutfitData.getOutfits().then(function(data) {

  console.info(data);

  // Clear out previous images
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

  // Append images to pg
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

  // Update global vars
  topObject = topRandom;
  bottomObject = bottomRandom;
  accessoryObject = accessoryRandom;

  console.log(topObject, bottomObject, accessoryObject);
});

// Function to filter for item type - returns array of all items for that type
var filter = function(data, filter) {
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
}

// Get a random item from array
var getRandom = function(data) {
  return data[Math.floor(Math.random()*data.length)];
}

// Button handlers
// On-click to generate daily outfit
$("#generateOutfitBtn").on("click", generateOutfit);
  
// On-click to generate the next outfit (same as above)
$("#nextOutfitBtn").on("click", generateOutfit);

// On-click to save the daly outfit
$("#saveOutfitBtn").on("click", function() {
  OutfitData.saveOutfit(selectedOutfit)

  // IDs
  var topID = topRandom.id;
  var bottomID = bottomRandom.id;
  var accessoryID = accessoryRandom.id;

  // Counters
  var topCounter = topRandom.times_worn;
  var bottomCounter = bottomRandom.times_worn;
  var accessoryCounter = accessoryRandom.times_worn;

  // +1 for each item type
  topCounter++;
  bottomCounter++;
  accessoryCounter++;

  // AJAX for top
  $.ajax({
    headers: {
      "Content-Type": "application/json"
    },
    type: "POST",
    url: "/api/updateItem",
    data: JSON.stringify({
      times_worn: topCounter,
      id: topID
    })
  });

  // AJAX for bottom
  $.ajax({
    headers: {
      "Content-Type": "application/json"
    },
    type: "POST",
    url: "/api/updateItem",
    data: JSON.stringify({
      times_worn: bottomCounter,
      id: bottomID
    })
  });

  // AJAX for accessory
  $.ajax({
    headers: {
      "Content-Type": "application/json"
    },
    type: "POST",
    url: "/api/updateItem",
    data: JSON.stringify({
      times_worn: accessoryCounter,
      id: accessoryID
    })
  });

  // AJAX for outfit
  $.ajax({
    headers: {
      "Content-Type": "application/json"
    },
    type: "POST",
    url: "/api/saveOutfit",
    data: JSON.stringify({
      top_id: topID,
      bottom_id: bottomID,
      accessory_id: accessoryID
    })
  });
});




// for saveOutfit - pass each object into saveOutfit
