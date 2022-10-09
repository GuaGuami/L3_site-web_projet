 var dom = document.getElementById("sal_compa");
                            var myChart = echarts.init(dom);
                            var app = {};

                            var option;



                            option = {
                              backgroundColor:'#E9FAEA',
                              legend: {},
                              grid:{
                                left:'11%',
                                right:'3%'
                                },
                              tooltip: {},
                              dataset: {
                                dimensions: ['product','2011', '2012', '2013', '2014', '2015','2016', '2017', '2018'],
                                source: [
                                  { product: 'SALAIRE MEDIAN', 2011: 27950.00, 2012: 26950.00, 2013: 27000.00, 2014: 27800.00, 2015:28100.00, 2016: 28100.00, 2017:29600.00, 2018: 29650.00 },
                                  { product: 'SALAIRE MOYEN', 2011: 28916.67, 2012: 27713.73, 2013: 28023.73, 2014: 28180.83, 2015: 28322.03, 2016: 28943.80, 2017: 29827.12, 2018: 30069.81 },
                                  
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
                                  'SALAIRE MEDIAN',
                                  'SALAIRE MOYEN'
                                  
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
                                      color:'#39B615'},
                                    { type: 'bar',
                                      color:'#C7B69E'},
                                    { type: 'bar',
                                      color:'#FBB1F4'},
                                    { type: 'bar',
                                      color:'#9CC4B0'},
                                    { type: 'bar',
                                      color:'#FF9898'},
                                    { type: 'bar',
                                      color:'#5059F8'},
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
