var values = [
      [2012,2013,2014,2015,2016,2017,2018],
      [2821,2488,2943,2904,3123,2958,2794]]

var data = [{
  type: 'table',
  header: {
    values: [["Année"],["Ecart des salaires moyens"]],
    align: ["center"],
    line: {width: 2, color: 'blue'},
    fill: {color: ['skyblue','lightpink']},
    font: {family: "Arial", size: 12, color: "white"},
  },
  cells: {
    values: values,
    align: ["center"],
    line: {color: "blue", width: 2},
   fill: {color: ['lightpink','skyblue','skyblue','lightpink']},
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
Plotly.newPlot('ecartHF', data, layout, config);