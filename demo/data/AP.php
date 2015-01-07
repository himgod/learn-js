<?php 
	$json_str = '{
			"mainTitle":"AP指标呈现",
			"subTitle":"Source: WorldClimate.com",
			"xAxisCategories":["23", "22", "21", "20", "19", "18",
						                "17", "16", "15", "14", "13", "12"],
			"yAxisTitle":[
				{
					"title":"Timess(s)",
					"label":"s"
				},
				{
					"title":"DSI(dbm)",
					"label":"dbm"
				},
				{
					"title":"NetSpeed",
					"label":"Mbs"
				}
			], 
			"series":
				[
					{
					"name": "平均时延",
					"data": [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
					"valueSuffix":"s"
					},
					{
					 "name": "上下行带宽",
					 "data": [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5],
					 "valueSuffix":"Mbs"		  		
					},
					{
						"name": "信号强度",
						"data": [-39, 42, 57, 85, 119, 15.2, 17.0, 166, 142, 103, -66, 48],
						"valueSuffix":"dbm"
				    }
			
				]
	}';

	
	echo $json_str;
?>