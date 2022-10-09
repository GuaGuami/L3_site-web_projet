var values = [
      [2011,2012,2013,2014,2015,2016,2017,2018],
      [30312.50,29228.57,29227.78,29561.11,30477.78,30800,31890,32575],
      [29700,28750,28850,29100,29500,30100,31200,31400],
      [25945.45,24881.82,25277.27,24515,23980,24675,25540,26088.89],
      [26800,26550,26700,27150,27800,28000,27500,27000],
      [25950,25445.45,24988,25069.23,25392.31,26180.77,26480,27119.23],
      [31619.05,29995,30365.31,20673.08,30780,31290.20,32481.63,32730.95]]

var data = [{
  type: 'table',
  header: {
    values: [["Année"],["Droit, économie et gestion"],["Ensemble Masters LMD"],["Lettres, langues, arts"],["Masters enseignement"],["Sciences humaines et sociales"],["Sciences, technologies et santé"]],
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
  height:220,
  margin:{
    l:10,
    r:10,
    b:15,
    t:10,
  }
}
var config = {responsive: true}
Plotly.newPlot('salMeanDom', data, layout, config);