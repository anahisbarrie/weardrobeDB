//API KEY
var APIKey = "13207618-cd600ee9239da705312ffe8c0";

$('document').ready(function () {

    //Pixabay API//AJAX request
    var category = "Fashion"

    function apithing() {
        var queryURL = "https://pixabay.com/api/?key=13207618-cd600ee9239da705312ffe8c0&q=fashion+trends&image_type=photo";

        //AJAX GET request
        $.ajax({
            url: queryURL,
            method: "GET"
        })

            //after data comes back
            .then(function (response) {
                console.log("HIT LIST:", response.hits)
                var hitList = response.hits
                for (var i = 0; i < hitList.length; i++) {
                    console.log(hitList[i].largeImageURL)
                    //Do i need this image tag? 
                    var categoryImg = $("<img height= '300px' width= '300px' class= gif>");

                    var imagePixabay = hitList[i].largeImageURL

                    categoryImg.attr("src", imagePixabay);
                    //prepending the image to the images div
                    $("#images").prepend(categoryImg);
                
                }
            })
    };
    apithing();
    
});


