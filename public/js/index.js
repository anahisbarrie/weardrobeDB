

// Get references to page elements
var $exampleBrand = $("#item-brand");
var $exampleType = $("#item-type");
var $exampleColor = $("#item-color");
var $exampleStyle = $("#item-style");
var $examplePrice = $("#item-price");
var $exampleLastWore = $("#last-wore");
var $exampleDescription = $("#item-description");
var $exampleForm = $("#inputform");
var $submitBtn = $("#submit");
var $exampleList = $("#example-list");

// The API object contains methods for each kind of request we'll make
var API = {
  saveExample: function(example) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/examples",
      data: JSON.stringify(example)
    });
  },
  getExamples: function() {
    return $.ajax({
      url: "api/examples",
      type: "GET"
    });
  },
  deleteExample: function(id) {
    return $.ajax({
      url: "api/examples/" + id,
      type: "DELETE"
    });
  }
};

// refreshExamples gets new examples from the db and repopulates the list
var refreshExamples = function() {
  API.getExamples().then(function(data) {
  console.log("TCL: refreshExamples -> data", data)
    var $examples = data.map(function(example) {
      var $a = $("<a>")
        .text(example.brand)
        .attr("href", "/example/" + example.id);
      // var $a2 = $("<a>")
      //   .text(example.type)
      //   .attr("href", "/example/" + example.id);
      // var $a3 = $("<a>")
      //   .text(example.color)
      //   .attr("href", "/example/" + example.id);
      var $a4 = $("<a>")
        .text(example.style)
        .attr("href", "/example/" + example.id);
      var $a5 = $("<a>")
        .text(example.price)
        .attr("href", "/example/" + example.id);
      var $a6= $("<a>")
        .text(example.lastworn)
        .attr("href", "/example/" + example.id);
      var $a7= $("<img>")
      .attr("src", example.imagelink)

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": example.id
        })
        .append($a)
        // .append($a2)
        // .append($a3)
        .append($a4)
        // .append($a5)
        // .append($a6)
      

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      $li.append($button);

      return $li;
    });

    $exampleList.empty();
    $exampleList.append($examples);
  });
};

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();
  let val = $exampleBrand.val()
  console.log("TCL: handleFormSubmit -> val", val)

  var example = {
    brand: $exampleBrand.val().trim(),
    type: $exampleType.val().trim(),
    color: $exampleColor.val().trim(),
    style: $exampleStyle.val().trim(),
    price: $examplePrice.val().trim(),
    lastworn: $exampleLastWore.val().trim(),
    description: $exampleDescription.val().trim()
  };

  if (!(example.brand && example.description)) {
    alert("You must enter an example text and description!");
    return;
  }

  API.saveExample(example).then(function() {
    refreshExamples();
  });

  $exampleBrand.val("");
  $exampleType.val("");
  $exampleColor.val("");
  $exampleStyle.val("");
  $examplePrice.val("");
  $exampleLastWore.val("");
  $exampleDescription.val("");
};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteExample(idToDelete).then(function() {
    refreshExamples();
  });
};

// Add event listeners to the submit and delete buttons
// $submitBtn.on("click", handleFormSubmit);
$exampleList.on("click", ".delete", handleDeleteBtnClick);
$("#inputform").submit(function(e){
e.preventDefault();
  var inputInfo = {
    brand: $exampleBrand.val().trim(),
    type: $exampleType.val().trim(),
    color: $exampleColor.val().trim(),
    style: $exampleStyle.val().trim(),
    price: $examplePrice.val().trim(),
    lastworn: $exampleLastWore.val().trim(),
    description: $exampleDescription.val().trim()
  };

  if (!(inputInfo.brand && inputInfo.description)) {
    alert("You must enter an example text and description!");
    return;
  }
$(this).ajaxSubmit({
data: inputInfo,
contentType: "application/json",
success: function(results){ 
  
  refreshExamples();
}
});
  $exampleBrand.val("");
  $exampleType.val("");
  $exampleColor.val("");
  $exampleStyle.val("");
  $examplePrice.val("");
  $exampleLastWore.val("");
  $exampleDescription.val("");
return false;
 
})