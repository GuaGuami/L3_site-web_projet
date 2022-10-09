 var dom = document.getElementById("disp3");
                                var myChart = echarts.init(dom);
                                var app = {};

                                var option;



                                option = {
                                  backgroundColor:'#FFEDF3',
                                  legend: {
                                    type:'scroll',
                                  },
                                  grid:{
                                left:'11%',
                                right:'3%',
                                bottom:'12%'
                                },
                                  tooltip: {},
                                  dataset: {
                                    dimensions: ['product','Droit, économie et gestion', 'Ensemble Masters LMD (hors Masters enseignement)', 'Lettres, langues, arts', 'Masters enseignement', 'Sciences humaines et sociales','Sciences, technologies et santé'],
                                    source: [
                                      { product: 'FEMMES', 'Droit, économie et gestion': 81, 'Ensemble Masters LMD (hors Masters enseignement)': 89, 'Lettres, langues, arts': 73, 'Masters enseignement': 98, 'Sciences humaines et sociales': 69,  'Sciences, technologies et santé': 76 },
                                      { product: 'HOMMES', 'Droit, économie et gestion': 86, 'Ensemble Masters LMD (hors Masters enseignement)': 90, 'Lettres, langues, arts': 77, 'Masters enseignement': 97, 'Sciences humaines et sociales': 73, 'Sciences, technologies et santé': 83 },
                                      
                                    ]

                                  },
                                  xAxis: { type: 'category', 
                                    axisLabel:{
                                      inverval :0
                                    },
                                    axisTick:{
                                      alignWithLabel:true
                                    },
                                    data:[
                                      'FEMMES',
                                      'HOMMES'
                                      
                                      ]
                                  },
                                  yAxis: {
                                    axisLabel: {
                                    show: true,
                                    formatter: '{value} %'
                                    }
                                  },
                                  // Declare several bar series, each will be mapped
                                  // to a column of dataset.source by default.
                                  series: [
                                    { type: 'bar',
                                      color:'#E4CAF6'},
                                    { type: 'bar',
                                      color:'#CAEEF6'},
                                    { type: 'bar',
                                      color:'#FBB1F4'},
                                    { type: 'bar',
                                      color:'#ABB3F9'},
                                    { type: 'bar',
                                      color:'#FF9898'},
                                    { type: 'bar',
                                      color:'#5059F8'},]
                                };


                                window.onresize = function(){
                                   myChart.resize();
                                };



                                if (option && typeof option === 'object') {
                                    myChart.setOption(option);
                                }

