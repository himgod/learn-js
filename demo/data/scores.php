<?php 
	$json_str = '{
			"mainTitle":"系统健康评分",
			"subTitle":"Source: WorldClimate.com",
			"xAxisCategories":["23", "22", "21", "20", "19", "18",
						                "17", "16", "15", "14", "13", "12"],
			"yAxisTitle":[
				{
					"title":"分数(分)",
					"label":"points"
				}
			], 
			"series":
				[
					{
					"name": "系统时间段的评分",
					"data": [70, 69, 95, 45, 82, 15, 25, 13, 90, 99, 70, 96],
					"valueSuffix":"points"
					}
				]
	}';

	
	echo $json_str;
?>
