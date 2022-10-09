var values = [
      [2012,2013,2014,2015,2016,2017,2018],
      [59,60,62,60,63,65,66]]

var data = [{
  type: 'table',
  header: {
    values: [["Année"],["Part en moyenne des emplois stables"]],
    align: ["center"],
    line: {width: 1, color: 'violet'},
    fill: {color: ['purple']},
    font: {family: "Arial", size: 12, color: "white"},
  },
  cells: {
    values: values,
    align: ["center"],
    line: {color: "violet", width: 1},
   fill: {color: ['white']},
    font: {family: "Arial", size: 11, color: ["black"]}
  }
}]
var layout={
  height:220,
  margin:{
    l:10,
    r:10,
    b:5,
    t:30,
  }
}
var config = {responsive: true}
Plotly.newPlot('partF', data, layout, config);