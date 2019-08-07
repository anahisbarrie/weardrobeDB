var OutfitData = {
  saveOutfit: function(example) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/top",
      data: JSON.stringify(example)
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


// for saveOutfit - pass each object into saveOutfit

// Function to get a random outfit
OutfitData.getOutfits().then(function(data) {
  // console.log("Data!" + JSON.stringify(data));
  // var tops = filter(data, "Top");
  var bottom = filter(data, "Bottom");
  var top = filter(data, "Top");
  var accessory = filter(data,"Accessory");
  // var accessories = filter(data, "Accessories");
  // console.info("tops:" + JSON.stringify(tops));
  // console.info("bottoms:" + JSON.stringify(bottom));
  // console.info("accessories:" + JSON.stringify(accessories));
  console.info("random bottom: " + JSON.stringify(getRandom(bottom)));
  console.info("random bottom: " + JSON.stringify(getRandom(top)));
  console.info("random bottom: " + JSON.stringify(getRandom(accessory)));
  console.info("random bottom: " + JSON.stringify(getRandom(bottom)));
  console.info("random bottom: " + JSON.stringify(getRandom(bottom)));
  console.info("random bottom: " + JSON.stringify(getRandom(bottom)));
})

var filter = function(data, filter) {
  var keep = [];
  for (var i = 0; i < data.length; i ++) {
    if (data[i].item_type === filter) {
      keep.push(data[i]);
    }
  }
  return keep;
}

var getRandom = function(data) {
  return data[Math.floor(Math.random()*data.length)];
}


// On-click to generate daily outfit
$("#generateOutfitBtn").on("click",generatOutfit());

