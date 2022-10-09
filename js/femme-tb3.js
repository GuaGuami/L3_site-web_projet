var values = [
      ["96%"],["4%"]]

var data = [{
  type: 'table',
  header: {
    values: [["Travaillant dans une entreprise privée"],["Travaillant dans une entreprise privée"]],
    align: ["center"],
    line: {width: 1, color: 'lightgrey'},
    fill: {color: ['purple','violet']},
    font: {family: "Arial", size: 12, color: "white"},
  },
  cells: {
    values: values,
    align: ["center"],
    line: {color: "lightgrey", width: 1},
   fill: {color: ['purple','violet']},
    font: {family: "Arial", size: 11, color: ["white"]}
  }
}]
var layout={
  height:220,
  margin:{
    l:10,
    r:10,
    b:5,
    t:70,
  }
}
var config = {responsive: true}
Plotly.newPlot('entrepriseF', data, layout, config);