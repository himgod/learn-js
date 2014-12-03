			function HashTable(key,value)
			{
				this.hashtable = new Object();
				
				this.add = function(key,value)
				{
				       // �ж�key�Ƿ����
				       if((key in this.hashtable) == false)
				       {
				    	   this.hashtable[key] = value;
				       }
				       
				};
				this.del = function(key)
				{
					if(key in this.hashtable)
					{
						delete(this.hashtable[key]);
					}
					else
					{
						alert("ɾ���ļ�ֵ������");
					}
				};
				
				this.getValue = function(key)
				{
					return this.hashtable[key];
				};
				this.isExistHashTable = function(key)
				{
					if((key in this.hashtable) == true)
					{
						return true;
					}
					else
					{
						return false;
					}
				};
				
				this.print = function(key)
				{
					alert(this.hashtable[key]);
				};
				this.length = function()
				{
					var len = 0;
					for(var k in this.hashtable)
					{
						len++;
					}
					return len;
				};
			}
			function randomColor()
			{
				return '#'+('00000'+(Math.random()*0x1000000<<0).toString(16)).slice(-6);
			}
			//alert(randomColor());
			//Chart class describe a Chart's property
			function Chart(data,chart_type)
			{
				this.title = data.mainTitle;
				this.subtitle = data.subTitle;
				this.chartType = chart_type;
				this.hashtable = new HashTable();//�洢y�����������ͬ��λ���ᣬ����洢�˱�ʾ��λ���ַ�
				//����x��
				this.xAxis = data.xAxisCategories;
				//����y��
				this.yAxis = new Array();	
				//����sereisData
				this.seriesArray = new Array();
				//���y������
				this.fillYAxisArray = function()
				{
					for(var i=0;i<data.yAxisTitle.length;i++)
					{
						//alert(data.yAxisTitle[i].title+data.yAxisTitle[i].label);
						var tmpLabel = data.yAxisTitle[i].label;
						var tmpYAxisDataOne;
						if( i == 0 )
					    {
							var tmpLabel = data.yAxisTitle[0].label;
							tmpYAxisDataOne = {
									"title": {
										"text":data.yAxisTitle[i].title
									},
									"labels":{
										"format": '{value} '+tmpLabel
									},
									"style":{
										"color":randomColor()
									}
								
							};
					    }
						else
						{
							tmpYAxisDataOne = {
									"title": {
										"text":data.yAxisTitle[i].title
									},
									"labels":{
										"format": '{value} '+tmpLabel
									},
									"style":{
										"color":randomColor()
									},
									opposite: true
							};  
						}
						if(this.hashtable.isExistHashTable(data.yAxisTitle[i].label) == false )
						{
							this.hashtable.add(i+1,data.yAxisTitle[i].label);
						}
						this.yAxis.push(tmpYAxisDataOne);
						//alert(this.yAxis[i].title);
					}
					//alert(this.hashtable.getValue(1));
				};
				
				//���series����,�������˫y��͵���
				this.fillSeriesArray = function()
				{
					//var tmpValueSuffix = "";
					//alert(this.hashtable.getValue(2));
					for(i=0;i<data.series.length;i++)
					{
						if(data.series[i].valueSuffix == this.hashtable.getValue(1))
						{
							var tmpSeriesDataOne = {
									"name":data.series[i].name,
									"color":randomColor(),
									"data":data.series[i].data,
									"tooltip":{
										"valueSuffix":data.series[i].valueSuffix
									}
								};
							//alert("hello" + this.hashtable.getValue(1));
						}
						else if(data.series[i].valueSuffix == this.hashtable.getValue(2))
						{
							var tmpSeriesDataOne = {
									"name":data.series[i].name,
									"color":randomColor(),
									"data":data.series[i].data,
									"yAxis":1,
									"tooltip":{
										"valueSuffix":data.series[i].valueSuffix
									}
								};
							//alert("hello" + this.hashtable.getValue(2));
						}
						else
						{
							var tmpSeriesDataOne = {
									"name":data.series[i].name,
									"color":randomColor(),
									"data":data.series[i].data,
									"yAxis":2,
									"tooltip":{
										"valueSuffix":data.series[i].valueSuffix
									}
								};
							//alert("hello else");
						}
						this.seriesArray.push(tmpSeriesDataOne);
					}
				 };
			}
			
			//��������ͼ����������json_urlΪ��ȡ���ݵ�url��ַ��div_id��ʾhtml��ʾλ�ã����ǩ��id��
			function drawCurveGraph(json_url,div_id,chart_type)
			{
				var testdata;
				$.ajax({ 
					async: false, 
					type : "POST", 
					url : json_url, 
					dataType : 'json', 
					success : function(data) { 
						testdata = data; 
					} 
				});

				var chart = new Chart(testdata,chart_type);
				chart.fillYAxisArray();
				chart.fillSeriesArray();
				//alert(chart.yAxis[0].title);
				$(function () {
				    $(div_id).highcharts({
				    	chart: {
					            zoomType: 'xy',
					            type:chart.chartType      
					        },
				        title: {
				            text: chart.title,
				            x: -20 //center
				        },
				        subtitle: {
				            text: chart.subtitle,
				            x: -20
				        },
				        xAxis: [{
				            categories: chart.xAxis
				        }],
				        yAxis: chart.yAxis,
				        tooltip: {
				            shared: true
				        },
				        legend: {
				            layout: 'vertical',
				            align: 'right',
				            verticalAlign: 'middle',
				            borderWidth: 0
				        },
				        
				        series: chart.seriesArray
				    });
				});
			}