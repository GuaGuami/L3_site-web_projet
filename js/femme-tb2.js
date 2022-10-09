var values = [
      ["2%"],["30%"],["68%"]]

var data = [{
  type: 'table',
  header: {
    values: [["Interim"],["CDD"],["CDI"]],
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
    t:90,
  }
}
var config = {responsive: true}
Plotly.newPlot('contratF', data, layout, config);