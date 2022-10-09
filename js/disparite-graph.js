var trace1 = {
  x: [2012, 2013, 2014, 2015, 2016, 2017, 2018],
  y: [2821, 2488, 2943, 2904, 3123, 2958, 2794],
  type: 'scatter'
};
var ecartHF = [trace1];
var layout = {
  height: 220,
  margin: {
    l: 40,
    r: 0,
    b: 30,
    t: 30,
    pad: 1
  },
};
var config = {responsive: true}
Plotly.newPlot('ecart', ecartHF, layout, config);
