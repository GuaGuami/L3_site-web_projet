
var cho_ann = {
 x: [2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018], 
  y: [ 9.7, 10.1, 9.9, 9.3, 8.6, 8.5, 7.8, 7.8], 
  name: 'Le taux de chômage',
  type: 'scatter'
};

var cho_ins = {
  x: [2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018], 
  y: [ 72, 66, 68, 67,71, 61, 63, 72],
  name: "Le taux d'insertion",
  yaxis: 'y2',
  type: 'scatter'
};

var data = [cho_ann, cho_ins];

var layout = {
  height: 290,
  margin: {
    l: 40,
    r: 0,
    b: 30,
    t: 10,
    pad: 1
  },
  
  yaxis: {title: 'Le taux de chômage'},
  yaxis2: {
    title: "Le taux d'insertion",
    titlefont: {color: 'rgb(148, 103, 189)'},
    tickfont: {color: 'rgb(148, 103, 189)'},
    overlaying: 'y',
    side: 'right'
  }
};
var config = {responsive: true}
Plotly.newPlot('CHO2', data, layout, config);
