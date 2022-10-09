var xValue = ["Taux d' insertion moyen UT1 en DEG", "Taux d' insertion moyen national en DEG", "Taux d' insertion moyen UT1 en STS", "Taux d' insertion moyen national en STS"];

var yValue = [80, 89, 54, 91];
var yValue2 = [79, 91, 85, 91];

var trace1 = {
  x: xValue,
  y: yValue,
  type: 'bar',
  name:'18 mois après le diplôme',
  text: yValue.map(String),
  textposition: 'auto',
  hoverinfo: 'none',
  marker: {
    color: 'red',
    line: {
      color: 'grey',
      width: 1.5
    }
  }
};

var trace2 = {
  x: xValue,
  y: yValue2,
  type: 'bar',
  name:'30 mois après le diplôme',
  text: yValue2.map(String),
  textposition: 'auto',
  hoverinfo: 'none',
  marker: {
    color: 'black',
    line: {
      color: 'skyblue',
      width: 1.5
    }
  }
};

var data = [trace1,trace2];

var layout = {
  yaxis:{
    title: "Taux d'insertion en %",
    titlefont:{
      size:10
    }
  },
  height: 292,
  margin: {
    l: 60,
    r: 150,
    b: 150,
    t: 5,
    pad: 1}
};
var config = {responsive: true}
Plotly.newPlot('txInsUT1', data, layout, config);