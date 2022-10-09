var data = [{
  type: "pie",
  values: [30, 68, 2],
  labels: ["CDD", "CDI", "Intérim"],
  textinfo: "label+percent",
  textposition: "outside",
  automargin: true,
}]

var layout = {
  height: 220,
  margin: {"t": 0, "b": 0, "l": 0, "r": 0},
  showlegend: false
  };
var config = {responsive: true}
Plotly.newPlot('contrat', data, layout, config);
