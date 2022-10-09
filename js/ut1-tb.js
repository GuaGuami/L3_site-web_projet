var values = [
      ["18 mois après le diplôme", "30 mois après le diplôme"],
      ["80%", "79%"],
      ["89%", "91%"],
      ["54%", "85%"],
      ["91%", "91%"]]

var data = [{
  type: 'table',
  header: {
    values: [["Durée pour avoir un travail"],["Taux d'insertion moyen UT1 en DEG"], ["Taux d'insertion national en DEG"],
         ["Taux d'insertion moyen UT1 en STS"], ["Taux d'insertion national en STS"]],
    align: ["left", "center"],
    line: {width: 2, color: 'skyblue'},
    fill: {color: 'grey'},
    font: {family: "Arial", size: 12, color: "white"},
  },
  cells: {
    values: values,
    align: ["left", "center"],
    line: {color: "skyblue", width: 2},
   fill: {color: [['red', 'black']]},
    font: {family: "Arial", size: 11, color: ["white"]}
  }
}]
var layout={
  height:292,
  margin:{
    l:10,
    r:10,
    b:30,
    t:60
  }
}
var config = {responsive: true}
Plotly.newPlot('txInsertion', data, layout, config);