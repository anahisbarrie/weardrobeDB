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


OutfitData.getOutfits().then(function(data) {
  // console.log("Data!" + JSON.stringify(data));
  // var tops = filter(data, "Top");
  var bottom = filter(data, "Bottom");
  // var accessories = filter(data, "Accessories");
  // console.info("tops:" + JSON.stringify(tops));
  // console.info("bottoms:" + JSON.stringify(bottom));
  // console.info("accessories:" + JSON.stringify(accessories));
  console.info("random bottom: " + JSON.stringify(getRandom(bottom)));
  console.info("random bottom: " + JSON.stringify(getRandom(bottom)));
  console.info("random bottom: " + JSON.stringify(getRandom(bottom)));
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

// // Object to generate outfit
// var dailyOutfit = {
//     getTop: function(id) {
//       return $.aja({
//         type: "GET",
//         url: "api/top",
//         data: JSON.stringify(outfit)
//       });
//     },
//     getBottom: function(id) {
//       return $.ajax({
//         url: "api/bottom",
//         type: "GET",
//         data: JSON.stringify(outfit)
//       });
//     },
//     getAccessories: function(id) {
//       return $.ajax({
//         url: "api/accessories",
//         type: "GET",
//         data:JSON.stringify(outfit)
//       });
//     }
// };

// function randomItembyType(item_type){

//     return id;
// }

// // Generate outfit
// function generateOutfit(){


//     randomItembyType("Top")



// };


// // On-click to generate daily outfit
// $("#generateOutfitBtn").on("click",generatOutfit());

