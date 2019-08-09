function getStats() {
    $.get('/api/statistics').then(data => {
      //Need all our arrays that we will eventually be manipulating to plug into the chart data array.
      let timesWornArray = []
      let seasonalityArray = []
      let typeArray = []
  
      //Need to loop through the array of objects in order to grab the necessary data and push it into the respective charts
      for (let i = 0; i < data.length; i++) {
  
        //This section will grab all the times worn and push them into the times worn array. We will use this array for both the top five and least five by slicing the front five and back five from the array once ordered. Push the numbers into timesWornArray
        let currentTimesWorn = data[i].times_worn
        timesWornArray.push(currentTimesWorn)
  
        //Push the seasonality of each clothing item into the seasonality array
        let currentItemSeasonality = data[i].seasonality
        seasonalityArray.push(currentItemSeasonality)
  
        //Push the style of each clothing item into the typeArray
        let currentItemType = data[i].item_type
        typeArray.push(currentItemType)
      }
  
  
      return {
        timesWornArray,
        seasonalityArray,
        typeArray,
        data
      }
  
    }).then(data => {
      console.log(`data: `, data.data)
      //In this .then I need to manipulate all the data so it is ready to be inputed into my funcation calls in the final .then()
      let sortedNamesArray = []
      let topFiveNames = []
      let bottomFiveNames = []
      //First we need to sort the timesWornArray so that we can then slice the first five and last five elements off
      let sortedTimesWornArray = data.timesWornArray.sort((a, b) => a - b)
  
      //Now we need to slice the first five and store them in bottom five and the last five and store them in top five
      let bottomFiveTimesWorn = sortedTimesWornArray.splice(0, 5)
      let topFiveItemsWorn = sortedTimesWornArray.splice(-5, 5)
  
      //We need two forloops to loop through the data object again. This loop will check the item_name value against the times_worn value. If the times_worn value matches the times_worn value in the ordered array, we will push the item name into a new item name array. This will then match the item names order to the values of the top five and least five most worn. We need two separate arrays for top five and bottom five.
      for (let i = 0; i < sortedTimesWornArray.length; i++) {
        let currentTimesWorn = sortedTimesWornArray[i]
        console.log("current times worn: ", currentTimesWorn)
        //Need second forloop to reference the data object
        for (let j = 0; j < data.data.length; j++) {
          let dataObjTimesWorn = data.data[j].times_worn
          
          let dataObjItemName = data.data[j].brand + " " + data.data[j].item_type
          if(dataObjTimesWorn === currentTimesWorn) { 
            //Push the names of the clothing into the item names array, the indexes will always match their respective item data in all arrays since we are in the same forloop
            sortedNamesArray.push(dataObjItemName)
          }
        }
      }
      
      return {
        bottomFiveTimesWorn,
        topFiveItemsWorn,
        sortedNamesArray
      }
  
    }).then(data => {
      //Call all functions
      // seasonality();
      // style();
      //leastWorn(data.bottomFiveTimesWorn, data.itemNames);
      //topFive(data.topFiveItemsWorn, data.itemNames);
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
      data: names
    })
  }
  
  //Need a function that gets the breakdown of seasonality and .then builds pie chart
  const seasonality = () => {
    var chartTwo = $('#seasonality');
  }
  
  //Need a function that gets the breakdown of style type and .then builds a pie chart
  const style = () => {
    var chartThree = $('#type');
  }
  
  getStats();