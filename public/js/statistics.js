function getStats() {
  $.get('/api/statistics').then(data => {
    console.log(`Data: `, data)
    //Need to loop through the array of objects in order to grab the necessary data and push it into the respective charts
    for (let i = 0; i < data.length; i++) {

      //Need all our arrays that we will eventually be manipulating to plug into the chart data array.
      let timesWornArray = []
      let seasonalityArray = []
      let typeArray = []

      //This section will grab all the times worn and push them into the times worn array. We will use this array for both the top five and least five by slicing the front five and back five from the array once ordered.
      let currentTimesWorn = data[i].times_worn
      let currentItemName = data[i].brand + " " + data[i].item_type

      //Push the numbers into times
      console.log("Current Name: ", currentItemName)
      console.log("Current Times Worn: ", currentTimesWorn)
      

      //We need a function that gets the top five most worn articles and .then builds and displays the chart
      const topFive = () => {
        var chartOne = $('#topFive');
      }

      //Need a function that gets the breakdown of seasonality and .then builds pie chart
      const seasonality = () => {
        var chartTwo = $('#seasonality');
      }

      //Need a function that gets the breakdown of style type and .then builds a pie chart
      const style = () => {
        var chartThree = $('#type');
      }

      //Need a function that gets the top five least worn articles of clothing .then builds a bar graph and prompts user to delete
      const leastWorn = () => {
        var chartFour = $('#leastWorn');
      }

      //Call all functions

      topFive();
      // seasonality();
      // style();
      // leastWorn();
    }
  })
}

getStats();