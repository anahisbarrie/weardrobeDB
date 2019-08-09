function getStats() {
  $.get('/api/statistics').then(data => {
    //Need all our arrays that we will eventually be manipulating to plug into the chart data array.
    let timesWornArray = []
    let seasonalityArray = []
    let styleArray = []
    let itemNameArray = []

    //Sort the object so that the lowest times_worn value is the first element and the largest is the last element 
    let sortedArrOfObj = data.sort((a, b) => a.times_worn > b.times_worn ? 1 : -1)

    console.log(`Sorted Array Of Objects `, sortedArrOfObj)

    //Need to loop through the array of objects in order to grab the necessary data and push it into the respective charts
    for (let i = 0; i < sortedArrOfObj.length; i++) {

      //This section will grab all the times worn and push them into the times worn array. We will use this array for both the top five and least five by slicing the front five and back five from the array once ordered. Push the numbers into timesWornArray
      let currentTimesWorn = sortedArrOfObj[i].times_worn
      timesWornArray.push(currentTimesWorn)

      //Push the seasonality of each clothing item into the seasonality array
      let currentItemSeasonality = sortedArrOfObj[i].seasonality
      seasonalityArray.push(currentItemSeasonality)

      //Push the style of each clothing item into the typeArray
      let currentItemStyle = sortedArrOfObj[i].style
      styleArray.push(currentItemStyle)

      //Push the names of the clothing into the item names array, the indexes will always match their respective item data in all arrays since we are in the same forloop
      let itemName = sortedArrOfObj[i].brand + " " + sortedArrOfObj[i].item_type
      itemNameArray.push(itemName)
    }

    return {
      timesWornArray,
      seasonalityArray,
      styleArray,
      itemNameArray
    }

  }).then(data => {
    console.log("STYLE ARRAY: ", data.styleArray)
    console.log("SEASONALITY ARRAY: ", data.seasonalityArray)

    //Now we need to slice the first five and store them in bottom five and the last five and store them in top five
    let bottomFiveTimesWorn = data.timesWornArray.splice(0, 5)
    let topFiveItemsWorn = data.timesWornArray.splice(-5, 5)

    //Now we need to splice the first five names and the last five names and sort them so that they match the times worn array.
    let bottomFiveNames = data.itemNameArray.splice(0, 5)
    let topFiveNames = data.itemNameArray.splice(-5, 5)

    //We are calling the seasonality chart builder function with an argument that is a separate function which is called to return all the percentages of each season and their respective names. It will return an array of objects with the season name and its percentage.
    seasonality(seasonPercentageCalculator(data.seasonalityArray))
    

    return {
      bottomFiveTimesWorn,
      topFiveItemsWorn,
      bottomFiveNames,
      topFiveNames
    }

  }).then(data => {
    //Call all functions
    // seasonality();
    // style();
    leastWorn(data.bottomFiveTimesWorn, data.bottomFiveNames);
    topFive(data.topFiveItemsWorn, data.topFiveNames);
  })
}

//We need a function that gets the top five most worn articles and .then builds and displays the chart
function topFive(topFive, names) {
  var chartOne = $('#topFive');
  console.log(`this is working in final .then()`, topFive)
  new Chart(chartOne, {
    type: 'bar',
    data: {
      labels: names,
      datasets: [{
        label: "Top Five Most Worn Articles Of Clothing",
        data: topFive
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  })
}

//Need a function that gets the top five least worn articles of clothing .then builds a bar graph and prompts user to delete
const leastWorn = (bottomFive, names) => {
  var chartFour = $('#leastWorn');
  new Chart(chartFour, {
    type: 'bar',
    data: {
      labels: names,
      datasets: [{
        label: "Top Five Least Worn Articles Of Clothing",
        data: bottomFive
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  })
}


//Need a function that gets the breakdown of seasonality and .then builds pie chart
const seasonality = (seasonPercentageCalculator) => {
  var chartTwo = $('#seasonality');
}

//Need a function that gets the breakdown of style type and .then builds a pie chart
const style = () => {
  var chartThree = $('#type');
}

//We need a function that cycles through the seasonality array and using a switch statement counts each instance of the respective season and adds 1 to the counter for that season. Once the loop is done, divide each season counter by the length of the array. This will give you the percentage each season type.
const seasonPercentageCalculator = seasonalityArray => {
  let Summer = {season: "Summer", count: 0}
  let Fall = {season: "Fall", count: 0}
  let Winter = {season: "Winter", count: 0}
  let Spring = {season: "Spring", count: 0}

  for(let i = 0; i < seasonalityArray.length; i++) {
    switch(seasonalityArray[i]) {

    }
  }
  return [Summer, Fall, Winter, Spring]
}

getStats();