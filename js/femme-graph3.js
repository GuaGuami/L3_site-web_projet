var data = [{
  values: [4, 96],
  labels: ['Travaillant dans une entreprise publique', 'Travaillant dans une entreprise privée'],
  type: 'pie'
}];

var layout = {
  height: 220,
  margin: {
    l: 40,
    r: 40,
    b: 10,
    t: 10,
    pad: 1}
};
var config = {responsive: true}
Plotly.newPlot('entreprise', data, layout, config);
