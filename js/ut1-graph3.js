var data = [
  {
    x: ['Droit, economie et gestion','Sciences, technologies et sociales','Sciences, technologies et santé'],
    y: [86.6, 82, 54],
    type: 'bar',
    marker: {
    color: 'red',
    opacity: 0.6,
    line: {
      color: 'lightgrey',
      width: 5
    }
    }
  }
];

var layout = {
  height:292,
  yaxis:{
    title: "Taux de réponse en %",
    titlefont:{
      size:9,
      color: 'skyblue'
    }
  },
  xaxis:{
    title:"-----------------------------------------Domaine---------------------------------------------",
    titlefont:{
      size:9,
      color:'skyblue'
    }
  },
  margin: {
    l: 60,
    r: 130,
    b: 150,
    t: 20,
    pad: 1}
};

var config = {responsive: true}
Plotly.newPlot('txRepUT1', data, layout, config); 