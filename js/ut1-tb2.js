var values = [
      ["Droit, économie et gestion", "Sciences, technologies et santé"],
      [29416.67,30150],
      [34866.67, 34550]]

var data = [{
  type: 'table',
  header: {
    values: [["Domaine"],["Salaire annuel moyen brut national estimé (en €)"], ["Salaire annuel moyen brut UT1 estimé (en €)"]],
    align: ["center"],
    line: {width: 1, color: 'black'},
    fill: {color: ['grey','skyblue','red']},
    font: {family: "Arial", size: 12, color: "white"},
  },
  cells: {
    values: values,
    align: ["left", "center"],
    line: {color: "black", width: 1},
   fill: {color: ['grey','skyblue','red']},
    font: {family: "Arial", size: 11, color: ["white"]}
  }
}]
var layout={
  height:292,
  margin:{
    l:10,
    r:10,
    b:30,
    t:100,
  }
}
var config = {responsive: true}
Plotly.newPlot('salUT1', data, layout, config);