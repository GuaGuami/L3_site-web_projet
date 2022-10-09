var trace1 = {
  x: [2012, 2013, 2014, 2015, 2016, 2017, 2018],
  y: [59, 60, 62, 60, 63, 65, 66],
  mode: 'lines+markers',
  line: {
    color: 'purple',
  }
};
var emploiStableF = [trace1];
var layout = {
  height: 220,
  margin: {
    l: 20,
    r: 10,
    b: 20,
    t: 10,
    pad: 0
  },
};

var config = {responsive: true}

Plotly.newPlot('stable', emploiStableF, layout, config);
