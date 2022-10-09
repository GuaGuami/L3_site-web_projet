var valAutres = {
  x: ['Droit, economie et gestion', 'Sciences, technologies et santé'],
  y: [29416.67, 30150],
  name: 'Salaire annuel moyen national',
  type: 'bar',
  opacity: 0.6,
  marker: {
    color: 'skyblue'
  }
};

var valUt1 = {
  x: ['Droit, economie et gestion', 'Sciences, technologies et santé'],
  y: [34866.67, 34550],
  name: 'Salaire annuel moyen UT1',
  type: 'bar',
  opacity: 0.6,
  marker: {
    color: 'red'
  }
};

var data = [valAutres, valUt1];

var layout = {
  barmode: 'group',
  yaxis:{
    title: "salaire annuel brut moyen estimé en €",
    titlefont:{
      size:9
    }
  },
  height:292,
  margin: {
    l: 50,
    r: 90,
    b: 130,
    t: 30,
    pad: 1}
};

var config = {responsive: true}

Plotly.newPlot('salaireUt1', data, layout, config);
