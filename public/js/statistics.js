$('document').ready(function() {

  //We need a function that gets the top five most worn articles and .then builds and displays the chart
  const topFive = () => {
      $.get('/api/topFive', data => {
        //console.log(`This is running: ${data}`)
      }).then(function (data) {
        var chartOne = $('#topFive');
        var topFive = new Chart(chartOne, {
          type: 'bar',
          data: {
            labels: [`1`, `2`, `3`, `4`, `5`],
            datasets: [{
              label: 'Top Five Most Worn',
              //Need to put in the data below using forloop
              data: [],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
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
        });
      })
  }
  //Need a function that gets the breakdown of seasonality and .then builds pie chart
  const seasonality = () => {
    $.get('/api/seasonality', data => {
      //console.log(`This is running: ${data}`)
    }).then(function (data) {
      var chartTwo = $('#seasonality');
      var seasonality = new Chart(chartTwo, {
        type: 'pie',
        data: {
          labels: [`1`, `2`, `3`, `4`, `5`],
          datasets: [{
            label: 'Style Breakdown By Seasonality',
            //Need to put in the data below using forloop
            data: [],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
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
      });
    })
}

  //Need a function that gets the breakdown of style type and .then builds a pie chart
  const style = () => {
    $.get('/api/type', data => {
      //console.log(`This is running: ${data}`)
    }).then(function (data) {
      var chartThree = $('#type');
      var type = new Chart(chartThree, {
        type: 'pie',
        data: {
          labels: [],
          datasets: [{
            label: 'Breakdown Of Style Type',
            //Need to put in the data below using forloop
            data: [],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
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
      });
    })
}
  //Need a function that gets the top five least worn articles of clothing .then builds a bar graph and prompts user to delete
  const leastWorn = () => {
    $.get('/api/leastWorn', data => {
      //console.log(`This is running: ${data}`)
    }).then(function (data) {
      var chartFour = $('#leastWorn');
      var leastWorn = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: [`1`, `2`, `3`, `4`, `5`],
          datasets: [{
            label: 'Top Five Least Worn',
            //Need to put in the data below using forloop
            data: [],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
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
      });
    })
}
//Call all functions
    topFive();
    seasonality();
    style();
    leastWorn();
});