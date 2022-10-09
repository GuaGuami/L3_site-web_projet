var values = [
      [2011,2012,2013,2014,2015,2016,2017,2018],
      [28916.7,27818.7,28118.7,28342.9,28485.4,29167.7,30008.3,30289]]

var data = [{
  type: 'table',
  header: {
    values: [["Année"],["Salaire médian"]],
    align: ["center"],
    line: {width: 1, color: 'darkolivegreen'},
    fill: {color: ['limegreen','chartreuse']},
    font: {family: "Arial", size: 12, color: "black"},
  },
  cells: {
    values: values,
    align: ["center"],
    line: {color: "darkolivegreen", width: 1},
   fill: {color: ['chartreuse','limegreen','chartreuse','limegreen']},
    font: {family: "Arial", size: 11, color: ["black"]}
  }
}]
var layout={
  height:220,
  margin:{
    l:10,
    r:10,
    b:15,
    t:15,
  }
}
var config = {responsive: true}
Plotly.newPlot('evolutionSalMean', data, layout, config);