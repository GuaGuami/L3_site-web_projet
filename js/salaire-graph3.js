var trace1 = {
  x: [2012, 2013, 2014, 2015, 2016, 2017, 2018],
  y: [28916.7, 27818.7, 28342.9, 28485.4, 29167.7, 30008.3, 30289],
  type: 'scatter',
  line: {
    color: 'green',
  }
};
var salMoyen = [trace1];
var layout = {
  height: 220,
  margin: {
    l: 30,
    r: 0,
    b: 30,
    t: 10,
    pad: 1
  }
};
var config = {responsive: true}
Plotly.newPlot('salMoyen', salMoyen, layout, config);
