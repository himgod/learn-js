<?php 
	$json_str = '{
			"mainTitle":"流量统计呈现",
			"subTitle":"Source: WorldClimate.com",
			"xAxisCategories":["23", "22", "21", "20", "19", "18",
						                "17", "16", "15", "14", "13", "12"],
			"yAxisTitle":[
				{
					"title":"Packets(包数)",
					"label":"Mbs"
				},
				{
					"title":"Bytes（字节数）",
					"label":"Kbs"
				}
			], 
			"series":
				[
					{
					"name": "上行包数",
					"data": [7, 8, 9, 14.5, 18, 21.5, 25.2, 26, 23.3, 18, 13, 9],
					"valueSuffix":"Mbs"
					},
					{
					 "name": "下行包数",
					 "data": [2, 8, 5, 11, 17, 22, 24, 24, 20, 14, 8, 5],
					 "valueSuffix":"Mbs"		  		
					},
					{
						"name": "上行字节数",
						"data": [39, 42, 57, 85, 119, 15.2, 17.0, 166, 142, 103, 6, 48],
						"valueSuffix":"Kbs"
				    },
					{
						"name": "下行字节数",
						"data": [39, 99, 87, 85, 11, 15.2, 17.0, 66, 42, 13, 66, 48],
						"valueSuffix":"Kbs"
				    }
			
				]
	}';
	
	echo $json_str;
?>
