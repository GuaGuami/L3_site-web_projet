var values = [
      ["Droit, economie et gestion", "Sciences humaines et sociales","Sciences, technologies et santé"],
      ["87%", "82%","54%"]]

var data = [{
  type: 'table',
  header: {
    values: [["Domaine"],["Taux de réponse moyen"]],
    align: ["center"],
    line: {width: 4, color: 'lightgrey'},
    fill: {color: 'red'},
    font: {family: "Arial", size: 12, color: "white"},
  },
  cells: {
    values: values,
    align: ["left", "center"],
    line: {color: "lightgrey", width: 4},
   fill: {color: ['white']},
    font: {family: "Arial", size: 11, color: ["black"]}
  }
}]
var layout={
  height:292,
  margin:{
    l:10,
    r:10,
    b:30,
    t:100
  }
}
var config = {responsive: true}
Plotly.newPlot('txReponse', data, layout, config);