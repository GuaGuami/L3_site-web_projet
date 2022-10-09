var trace1 = {
  x: [2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018], 
  y: [ 9.7, 10.1, 9.9, 9.3, 8.6, 8.5, 7.8, 7.8], 
  type: 'scatter',
  line: {
    color: '#6C431A',
  }
};
var data = [trace1];
var cho = {
  height: 290,
  margin: {
    l: 30,
    r: 20,
    b: 30,
    t: 20,
    pad: 1
  }
};
var config = {responsive: true}
Plotly.newPlot('CHO1', data, cho, config);
