var width = 0;
var height = 0;
function pieData(score_arg)
{			    
	this.colors = ["#DD1D00","#FB6362","#F8A20F","#26881D","#3CA7EF"];//Highcharts.getOptions().colors,
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
	score_tmp = Math.floor((Math.random()*100+1));
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
				        borderWidth:0,
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
			$("#view").css("left",width-13);
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
		else
		{
			 $("#view").html( (Number($("#view").html()) + 1) );
		}
	   
	}
}

function drawPolar(div_id)
{
	score_tmp = Math.floor((Math.random()*100+1));
	var polarData =[];
	for(var i = 0 ; i < 5;i++)
	{
		polarData.push(Math.floor((Math.random()*100+40)));
	}
	$(function () {
    // Parse the data from an inline table using the Highcharts Data plugin
			$(div_id).highcharts({
				chart: {
					polar: true,
				},
				
				title: {
					text: 'Wind rose for South Shore Met Station, Oregon'
				},
				
				subtitle: {
					text: 'Source: or.water.usgs.gov'
				},
				pane: {
					size:"100%"
				},
				
				legend: {
					reversed: true,
					align: 'right',
					verticalAlign: 'top',
					y: 100,
					layout: 'vertical'
				},
				
				xAxis: {
					categories:['','','','',''],
					//tickmarkPlacement: 'on',
					enabled:false
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
					valueSuffix: '%',
					//followPointer: true
				},
					
				plotOptions: {
					series: {
						stacking: 'normal',
						shadow: false,
						//grouping:true,
						groupPadding: 0,
						pointPlacement: 'between',
						//pointStart: 20,
						//pointInterval: 0,
						colorByPoint: true,
						dataLabels:{
							crop:true
						}
					},
					pie: {
						shadow: false,
						center: ['50%', '50%'],
						dataLabels: {
                        	enabled: false
                   			}
					},
					column: {
						pointPadding: 0,
						groupPadding: 0
					}
				},
				series: [{
					type: 'column',
					data: polarData,          
					colors:["#DD1D00","#FB6362","#F8A20F","#26881D","#3CA7EF"],
					animation: {
			            duration: 2000
			            }
				},
				{
                name:'100',
                type:'pie',
                data:[10],
                colors:["#FFFFFF","#FB6362","#F8A20F","#26881D","#3CA7EF"],
                size:'25%',
				animation: {
			            duration: 2000
			            }
				}]
			},
			function(chart)
			{
			 //var test = chart.renderer.text('<div class="test" style="display:block">'+99+'</div>', chart.chartWidth/2-80, chart.chartHeight/2+48)
					        // .attr({zIndex:3})
					        // .css({
					           //  color: '#4512A7',
					            // fontSize: '50px'
					        // })
					        // .add();
				width = chart.chartWidth/2-88;
				height = chart.chartHeight/2+48;
			}
			);
		if( score_tmp == 100 )
		{
			$("#view").css("left",width);
			$("#view").css("top",height);
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