var values = [
      ["femmes","hommes"],
      ["81%","86%"],
      ["89%","90%"],
      ["73%","77%"],
      ["98%","97%"],
      ["69%","73%"],
      ["76%","83%"]]

var data = [{
  type: 'table',
  header: {
    values: [["Genre"],["Droit, économie et gestion"],["Ensemble Masters LMD"],["Lettres, langues, arts"],["Masters enseignement"],["Sciences humaines et sociales"],["Sciences, technologies et santé"]],
    align: ["center"],
    line: {width: 1, color: 'white'},
    fill: {color: ['lightgrey']},
    font: {family: "Arial", size: 12, color: "black"},
  },
  cells: {
    values: values,
    align: ["center"],
    line: {color: "white", width: 1},
   fill: {color: [['hotpink','darkblue']]},
    font: {family: "Arial", size: 11, color: ["white"]}
  }
}]
var layout={
  height:220,
  margin:{
    l:10,
    r:10,
    b:15,
    t:50,
  }
}
var config = {responsive: true}
Plotly.newPlot('txMinHF', data, layout, config);