var width = 0;
var height = 0;
function pieData(score_arg)
{			    
	this.colors = ["#DD1D00","#FB6362","#F8A20F","#26881D","#3CA7EF"];//Highcharts.getOptions().colors,
	//this.colors = ["#FB6262","#FB6262","#FB6262","#FB6262","#FB6262"];
	this.categories = ['网络稳定性', '用户信号质量', '在线用户数', '干扰信号强度', '网络连通性'];
	this.name = 'Browser brands';
	this.scoreData = [];
	this.data = [89,88,76,34,23];
	// Build the data arrays
	this.score = score_arg
	this.innersize = "70%";
	this.plotsize = "100%";

	this.versionsData = [];
	this.hashtable = new HashTable();
	this.hashtable.add("网络连通性","76");
	this.hashtable.add("网络稳定性","87");
	this.hashtable.add("用户信号质量","82");
	this.hashtable.add("在线用户数","89");
	this.hashtable.add("干扰信号强度","76");

	if(this.score > 90)
	{
		this.innersize = "80%";
		this.plotsize = "110%";
	}
	else if(this.score > 60)
	{
		this.innersize = "50%";
		this.plotsize = "80%";
	}
	else
	{
		this.innersize = "40%";
		this.plotsize = "70%";
	}
	for (var i = 0; i < this.categories.length; i++) {
	// add browser data
		this.scoreData.push({
			    name: this.categories[i],
				   y: Math.floor((Math.random()*100+10)),
				color: this.colors[i]
			});
		}
				    // Create the chart   
}

function drawPie(div_id)
{
	score_tmp = 100;//= Math.floor((Math.random()*100+1));
	var piedata = new pieData(score_tmp);
	
	$(function () {
		$(div_id).highcharts({
				chart: {
					type: 'pie'
				},
				title: {
				    text: 'Browser market share, April, 2011'
				 },
				yAxis: {
				    title:{
				        text: 'Total percent market share'
				     }
				},
				plotOptions: {
				    pie: {
				        borderWidth:2,
				        borderColor:"#FFFFFF",
				        cursor: 'pointer',
				        center: ['50%', '50%'],
				        innerSize:piedata.innersize,
				        size:piedata.plotsize,
				        dataLabels: {
                        	enabled: true
                   			}
				        }
				},
				credits:{
					enabled: false
				},
				exporting: {
					enabled: false
				},
				navigation: {
					buttonOptions: {
						enabled: false
					}
				},
				tooltip: {
				    //valueSuffix: '%',
				    backgroundColor:'#FCFFC5',
				    formatter: function() {
				    	return '<b>' + this.point.name +':</b>' + (this.percentage).toFixed(2) + "%";
				    }
				},
				series: [ {
				    name: '百分比',
				    data: piedata.scoreData,
				    //size: '110%',
				    //innerSize: '50%',
				    dataLabels: {
						formatter: function() {
							var tmp = this.point.name;
							return this.percentage > 1 ? '<b>'+ tmp +':</b> '+ this.y : null;
							},
               			distance: 70
				        //format: hashtable.getValue('\{point.name\}')
				     },
				    animation: {
			            duration: 2000
			            }
				    }]
			},
			function (chart) { 
				// on complete
				 chart.renderer.circle(chart.chartWidth/2,chart.chartHeight/2+18,205)
					  .attr({
							'fill':'none',
				    		'stroke-width': 0.5,
				            'stroke': '#000000',
				            'stroke-dasharray':5,
				            'stroke-opacity':0.5
				    	})
				    	.add();
				    	chart.renderer.circle(chart.chartWidth/2,chart.chartHeight/2+20,50)
				    	.attr({
				    		'fill':'none',
				    		'stroke-width': 0.5,
				            'stroke': '#000000',
				            'stroke-dasharray':5,
				             'stroke-opacity':0.5
				    	})
				    	.add();
				    	chart.renderer.path(['M', chart.chartWidth/2, chart.chartHeight/2+19, 'H', chart.chartWidth/2+220,'M', chart.chartWidth/2, chart.chartHeight/2+19,'H', chart.chartWidth/2-220,'M',chart.chartWidth/2, chart.chartHeight/2+19,'V',chart.chartHeight/2+235,'M',chart.chartWidth/2, chart.chartHeight/2+19,'V',chart.chartHeight/2-200])
				            .attr({
				                'stroke-width': 0.5,
				                 'stroke': '#000000',
				                 'stroke-dasharray':5,
				                 'stroke-opacity':0.5
				            })
				            .add();
				        width = chart.chartWidth/2-38;
				        height = chart.chartHeight/2+40;
				        // var test = chart.renderer.text('<div class="test" style="display:block">'+score+'</div>', chart.chartWidth/2-38, chart.chartHeight/2+40)
					       //  .attr({zIndex:2})
					       //  .css({
					       //      color: '#4512A7',
					       //      fontSize: '60px'
					       //  })
					       //  .add();
				    }
		);
		
		if( score_tmp == 100 )
		{
			$("#view").css("left",width-33);
			$("#view").css("top",height-28);
		}
		$("#view").css("left",width+13);
		$("#view").css("top",height-28);
		$("#view").css("width",54);
		$("#view").css("height",52);
		$("#view").css("position","absolute");
		$("#view").css("font-size","65px");
		$("#view").css("color","#4512A7");
		$("#view").html("00");
		timerID = setInterval("num()", 2500/score_tmp);
		});
	
}
function num() 
{
	if (Number($("#view").html()) >= Number(score_tmp)) 
	{
	    clearInterval(timerID)
	}
	else
	{
		
		if(  (Number($("#view").html()-0) + 1) < 10 )
		{
			$("#view").html( "0" + (Number($("#view").html()) + 1));
		}
		else if((Number($("#view").html()-0) + 1) == 100)
		{
			alert("helkl9");
		}
		else
		{
			 $("#view").html( (Number($("#view").html()) + 1) );
		}
	   
	}
}

function drawPolar(div_id)
{
    i = Math.floor((Math.random()*5));
	//score_tmp = [78,84,65,90,98];
	score_tmp = 0;
	//test data
	var polarData3 =[100,100,100,100,100];;
	//数据顺序为'在线用户数’，'用户信号质量','网络稳定性','网络连通性','干扰信号强度'
	var polarData =[[60,60,60,60,60],[70,55,72,81,90],[88,86,88,86,91],[100,90,93,88,81],[90,84,95,78,92]];
	var polarData2 =[[40,40,40,40,40],[30,45,28,19,10],[12,14,12,14,9],[0,10,7,12,19],[10,16,5,22,8]];
	for(var j = 0 ; j < 5;j++)
	{
		score_tmp += (polarData[i][j]/5);
	}
	var iCategory =0;
	$(function () {
    // Parse the data from an inline table using the Highcharts Data plugin
			$(div_id).highcharts({
				/*data: {
					table: 'freq',
					startRow: 1,
					endRow: 6,
					endColumn: 2
				},*/
				chart: {
					polar: true
				},
				
				title: {
					text: null
				},
				
				subtitle: {
					text: ''
				},
				credits: {
					enabled: false
				},
				exporting: {
					enabled: false
				},
				pane: {
					size:"100%"
				},
				legend: {
					enabled: false
				},
				xAxis: {
					categories:['','','','',''],//['网络稳定性', '用户信号质量', '在线用户数', '干扰信号强度', '网络连通性'],
					//tickmarkPlacement: 'on',
					enabled:true
				},	
				yAxis: {
					min: 0,
					endOnTick: false,
					//showLastLabel: true,
					//reversedStacks: true,
					title: {
						//text: 'Frequency (%)'
					},
					labels: {
						formatter: function () {
							//return this.value + '%';
						}
					}
				},
				tooltip: {
					backgroundColor:'#FCFFC5'
					//valueSuffix: '%',
					//followPointer: true
				},
					
				plotOptions: {
					series: {
						stacking: 'normal',
						shadow: false,
						//grouping:true,
						groupPadding: 0,
						pointPlacement: 'on',
						pointPadding:0.005,
						//pointStart: 0,
						//pointInterval: 0,
						colors:["#DD1D00","#FB6362","#F8A20F","#26881D","#3CA7EF"],
						colorByPoint: true
					},
					pie: {
						shadow: false,
						center: ['50%', '50%'],
						startAngle:36,
						animation:false,
						dataLabels: {
                        	enabled: true,
							crop:true,
							overflow:'none',
							connectorPadding: 6,
							connectorWidth:2.5,
							zIndex:3
                   			}
					},
					column: {
						pointPadding: 0,
						groupPadding: 0,
						dataLabels: {
                        	enabled: false
                   			}
						//threshold:30
					}
				}
				,
				series: [{
					type: 'column',
					borderWidth:0,
					data: polarData2[i],          
					colors:["#F6BC58","#F88685","#F04F37","#63B8F2","#4B9E44"],
					animation: {
			            duration: 3000
			            },
					zIndex:3
				},
				{
					type:'pie',
					data:polarData3,
					dataLabels: {
						formatter: function() {
							var category = [ '用户信号质量','网络稳定性','网络连通性','干扰信号强度','在线用户数'];
							var tmp = category[iCategory];
							iCategory++;
							
							var labelData = polarData[i][(iCategory%5)];
							return this.percentage > 1 ? '<b>'+ tmp +':</b> '+ labelData : null;
							},
               			distance: 80
				        //format: hashtable.getValue('\{point.name\}')
				     },
					colors:["#F88685","#F04F37","#63B8F2","#4B9E44","#F6BC58"],
					size:'103%',
					zIndex:2
				},
				{
					type: 'column',
					borderWidth:0,
					data: polarData[i], 
					colors:["#F8A20F","#FB6362","#DD1D00","#3CA7EF","#26881D"],
					animation: {
			            duration: 2000
			            },
					zIndex:3
				}
				]
				/*{
                name:'100',
                type:'pie',
                data:[10],
                colors:["#FFFFFF"],
                size:'25%',
				animation: {
			            duration: 2000
			            }
				}]*/
			},
			function(chart)
			{
			    chart.renderer.circle(chart.chartWidth/2-1,chart.chartHeight/2-1,100)
				    	.attr({
							 'zIndex':3,
				    		'fill':'#FFFFFF',
				    		'stroke-width': 0,
				            'stroke': '#000000',
				            'stroke-dasharray':0,
				             'stroke-opacity':0.5
				    	})
				    	.add();
			 //var test = chart.renderer.text('<div class="test" style="display:block">'+99+'</div>', chart.chartWidth/2-80, chart.chartHeight/2+48)
					        // .attr({zIndex:3})
					        // .css({
					           //  color: '#4512A7',
					            // fontSize: '50px'
					        // })
					        // .add();
				width = chart.chartWidth/2-38;
				height = chart.chartHeight/2+23  ;
			}
			);
		if( score_tmp == 100 )
		{
			$("#view").css("left",width);
			$("#view").css("top",height);
		}
		$("#view").css("left",width+13);
		$("#view").css("top",height-33);
		$("#view").css("width",54);
		$("#view").css("height",52);
		$("#view").css("position","absolute");
		$("#view").css("font-size","66px");
		$("#view").css("font-family","方正兰亭刊黑");
		$("#view").css("color","#4512A7");
		$("#view").html("00");
		timerID = setInterval("num()", 2000/score_tmp);
		
		});
}