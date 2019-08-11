//API KEY
var APIKey = "13207618-cd600ee9239da705312ffe8c0";
console.log("IM LOADED")
$('document').ready(function () {
console.log("IM READY")
    //Pixabay API//AJAX request
    var category = "fashion"

    function apithing() {
        var queryURL = "https://pixabay.com/api/?key=13207618-cd600ee9239da705312ffe8c0&q=style+trends&image_type=photo";

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
                    
                    var categoryImg = $("<img height= '350px' width= '300px' class= photo>");
                
                    var imagePixabay = hitList[i].largeImageURL

                    categoryImg.attr("src", imagePixabay);
                    //prepending the image to the images div
                    $("#images").prepend(categoryImg);
                
                }
            })
    };
    apithing();
    
});



