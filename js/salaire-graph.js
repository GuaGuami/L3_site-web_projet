var dom = document.getElementById("sal1");
                                            var myChart = echarts.init(dom);
                                            var app = {};

                                            var option;



                                            option = {
                                                      backgroundColor:'#E9FAEA',
                                                      legend: {
                                                        type:'scroll',
                                                        bottom:3
                                                      },
                                                      grid:{
                                                        left:'16%',
                                                        right:'3%',
                                                        top:'11%'
                                                      },
                                                      tooltip: {},
                                                      dataset: {
                                                        dimensions: ['product','Droit, économie et gestion', 'Ensemble Masters LMD (hors Masters enseignement)', 'Lettres, langues, arts', 'Masters enseignement', 'Sciences humaines et sociales','Sciences, technologies et santé'],
                                                        source: [
                                                          { product: '2011', 'Droit, économie et gestion': 30312.50, 'Ensemble Masters LMD (hors Masters enseignement)': 29700.00, 'Lettres, langues, arts': 25945.45, 'Masters enseignement': 26800.00, 'Sciences humaines et sociales': 25950.00,'Sciences, technologies et santé': 31619.04 },
                                                          { product: '2012', 'Droit, économie et gestion': 29228.57, 'Ensemble Masters LMD (hors Masters enseignement)': 28750.00, 'Lettres, langues, arts': 24881.81, 'Masters enseignement': 26550.00, 'Sciences humaines et sociales': 25445.45, 'Sciences, technologies et santé': 29995.00},
                                                          { product: '2013', 'Droit, économie et gestion': 29277.77, 'Ensemble Masters LMD (hors Masters enseignement)': 28850   , 'Lettres, langues, arts': 25277.27, 'Masters enseignement': 26700.00, 'Sciences humaines et sociales': 24988.00, 'Sciences, technologies et santé': 30365.30},
                                                          { product: '2014', 'Droit, économie et gestion': 29561.11, 'Ensemble Masters LMD (hors Masters enseignement)': 29100.00, 'Lettres, langues, arts':24515.00, 'Masters enseignement': 27150.00, 'Sciences humaines et sociales': 25069.23, 'Sciences, technologies et santé': 30673.07},
                                                          { product: '2015', 'Droit, économie et gestion': 30477.78, 'Ensemble Masters LMD (hors Masters enseignement)': 29500.00, 'Lettres, langues, arts': 23980.00, 'Masters enseignement': 27800.00, 'Sciences humaines et sociales': 25392.31, 'Sciences, technologies et santé': 30780.00},
                                                          { product: '2016', 'Droit, économie et gestion': 30800.00, 'Ensemble Masters LMD (hors Masters enseignement)': 30100.00, 'Lettres, langues, arts': 24675.00, 'Masters enseignement': 28000.00, 'Sciences humaines et sociales': 26180.77, 'Sciences, technologies et santé': 31290.20 },
                                                          { product: '2017', 'Droit, économie et gestion': 31890.00, 'Ensemble Masters LMD (hors Masters enseignement)': 31200.00, 'Lettres, langues, arts': 25540.00, 'Masters enseignement': 27500.00, 'Sciences humaines et sociales': 26480.00, 'Sciences, technologies et santé': 32481.63},
                                                          { product: '2018', 'Droit, économie et gestion': 32575.00, 'Ensemble Masters LMD (hors Masters enseignement)': 31400.00, 'Lettres, langues, arts': 26088.89, 'Masters enseignement': 27000.00, 'Sciences humaines et sociales': 27119.23, 'Sciences, technologies et santé': 32730.95 },

                                                        ]

                                                      },
                                                      xAxis: { type: 'category', 
                                                        axisLabel:{
                                                          inverval :0,
                                                                    
                                                        },
                                                        axisTick:{
                                                          alignWithLabel:true
                                                        },
                                                        data:[
                                                          '2011',
                                                          '2012',
                                                          '2013',
                                                          '2014',
                                                          '2015',
                                                          '2016',
                                                          '2017',
                                                          '2018'
                                                          ]
                                                      },
                                                      yAxis: {
                                                        axisLabel: {
                                                          show: true,
                                                          formatter: '{value} €'
                                                        },
                                                      },
                                                      // Declare several bar series, each will be mapped
                                                      // to a column of dataset.source by default.
                                                      series: [
                                                        { type: 'bar',
                                                            color:'#9ED2F2'
                                                        }, 
                                                        { type: 'bar',
                                                            color:'#856BEE'
                                                        }, 
                                                        { type: 'bar',
                                                            color:'#35E689'
                                                        },
                                                        { type: 'bar',
                                                            color:'#FFB423'
                                                        },
                                                        { type: 'bar',
                                                            color:'#AFCE67'
                                                        },
                                                        { type: 'bar',
                                                            color:'#FEFA28'
                                                        },
                                                        { type: 'bar',
                                                            color:'#90FD80'
                                                        },
                                                        { type: 'bar',
                                                            color:'#93B275'
                                                        },
                                                        ]
                                                    };

                                                    if (option && typeof option === 'object') {
                                                        myChart.setOption(option);
                                                    }

                                                    window.onresize = function(){
                                                        myChart.resize();
                                                    };

