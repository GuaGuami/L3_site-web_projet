var trace3 = {
  x: ['Sciences, technologies et santé', 'Sciences humaines et sociales', 'Masters enseignement', 'Lettres, langues et arts', 'Master LMD', 'Droit, économie et gestion'],
  y: [47, 50, 50, 59, 50, 47],
  name: 'Femme',
  type: 'bar',
  marker:{
  color:'deeppink'}
};

var trace4 = {
  x: ['Sciences, technologies et santé', 'Sciences humaines et sociales', 'Masters enseignement', 'Lettres, langues et arts', 'Master LMD', 'Droit, économie et gestion'],
  y: [53, 50, 50, 41, 50, 53],
  name: 'Homme',
  type: 'bar',
  marker:{
    color:'darkblue'
  }
};

var repartition = [trace3, trace4];
var layout2 = {
  barmode: 'stack',
  height: 220,
  margin: {
    l: 30,
    r: 10,
    b: 150,
    t: 10,
    pad: 1}
};
var config = {responsive: true}
Plotly.newPlot('partHF', repartition, layout2, config);