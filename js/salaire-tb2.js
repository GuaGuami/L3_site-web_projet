var values = [
      [2011,2012,2013,2014,2015,2016,2017,2018],
      [27950,26950,27000,27800,28100,28100,29600,29650],
      [28916.67,27713.73,28023.73,28180.83,28322.03,28943.80,29827.12,30069.81]]

var data = [{
  type: 'table',
  header: {
    values: [["Année"],["Salaire médian"],["Salaire moyen"]],
    align: ["center"],
    line: {width: 1, color: 'white'},
    fill: {color: ['darkolivegreen','chartreuse']},
    font: {family: "Arial", size: 12, color: ["white","black"]},
  },
  cells: {
    values: values,
    align: ["center"],
    line: {color: "white", width: 1},
   fill: {color: ['darkolivegreen','white']},
    font: {family: "Arial", size: 11, color: ["white","black"]}
  }
}]
var layout={
  height:180,
  margin:{
    l:10,
    r:10,
    b:15,
    t:10,
  }
}
var config = {responsive: true}
Plotly.newPlot('compSalMeanMed', data, layout, config);