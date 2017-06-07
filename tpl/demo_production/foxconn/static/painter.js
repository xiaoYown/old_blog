function process_1(rawData){

    var data = rawData.data;
    var option = {
        tooltip : {
            formatter: "{a} <br/>{c} {b}"
        },
        series : [
            {
                name: data[0][1],
                type: 'gauge',
                z: 3,
                min: data[3][1],
                max: data[2][1],
                splitNumber: 10,
                radius: '60%',
                axisLine: {            // 坐标轴线
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: [[0.09, 'lime'],[0.82, '#1e90ff'],[1, '#ff4500']],
                        width: 3,
                        shadowColor : '#fff', //默认透明
                        shadowBlur: 10
                    }
                },
                axisLabel: {            // 坐标轴小标记
                    show: false,
                    textStyle: {       // 属性lineStyle控制线条样式
                        fontWeight: 'bolder',
                        color: '#fff',
                        shadowColor : '#fff', //默认透明
                        shadowBlur: 10
                    }
                },
                axisTick: {            // 坐标轴小标记
                    length :15,        // 属性length控制线长
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: 'auto',
                        shadowColor : '#fff', //默认透明
                        shadowBlur: 10
                    }
                },
                splitLine: {           // 分隔线
                    length :25,         // 属性length控制线长
                    lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                        width:3,
                        color: '#fff',
                        shadowColor : '#fff', //默认透明
                        shadowBlur: 10
                    }
                },
                pointer: {           // 指针
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 5,
                    width: 4
                },
                title : {
                    show: false,
                    textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                        fontWeight: 'bolder',
                        fontSize: 20,
                        fontStyle: 'italic',
                        color: '#fff',
                        shadowColor : '#fff', //默认透明
                        shadowBlur: 10
                    }
                },
                detail : {
                    // backgroundColor: 'rgba(30,144,255,0.8)',
                    // borderWidth: 1,
                    // borderColor: '#fff',
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 5,
                    offsetCenter: [0, '50%'],       // x, y，单位px
                    textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                        fontWeight: 'normal',
                        color: '#fff',
                        fontSize: 16
                    }
                },
                data:[{value: data[4][1], name: data[1][1]}]
            },
            {
                name: data[0][2],
                type: 'gauge',
                center: ['20%', '55%'],    // 默认全局居中
                radius: '40%',
                min:data[3][2],
                max:data[2][2],
                endAngle:45,
                splitNumber:7,
                axisLine: {            // 坐标轴线
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: [[0.29, 'lime'],[0.86, '#1e90ff'],[1, '#ff4500']],
                        width: 2,
                        shadowColor : '#fff', //默认透明
                        shadowBlur: 10
                    }
                },
                axisLabel: {            // 坐标轴小标记
                    show: false,
                    textStyle: {       // 属性lineStyle控制线条样式
                        fontWeight: 'bolder',
                        color: '#fff',
                        shadowColor : '#fff', //默认透明
                        shadowBlur: 10
                    }
                },
                axisTick: {            // 坐标轴小标记
                    length :12,        // 属性length控制线长
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: 'auto',
                        shadowColor : '#fff', //默认透明
                        shadowBlur: 10
                    }
                },
                splitLine: {           // 分隔线
                    length :20,         // 属性length控制线长
                    lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                        width:3,
                        color: '#fff',
                        shadowColor : '#fff', //默认透明
                        shadowBlur: 10
                    }
                },
                pointer: {
                    width:5,
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 5,
                    width: 3
                },
                title : {
                    show: false,
                    offsetCenter: [0, '-30%'],       // x, y，单位px
                    textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                        fontWeight: 'bolder',
                        fontStyle: 'italic',
                        color: '#fff',
                        shadowColor : '#fff', //默认透明
                        shadowBlur: 10
                    }
                },
                detail : {
                    show: true,
                    //backgroundColor: 'rgba(30,144,255,0.8)',
                   // borderWidth: 1,
                    borderColor: '#fff',
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 5,
                    width: 80,
                    height:30,
                    offsetCenter: [25, '20%'],       // x, y，单位px
                    textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                        fontWeight: 'normal',
                        color: '#fff',
                        fontSize: 14
                    }
                },
                data:[{value: data[4][2], name: data[1][2]}]
            },
            {
                name: data[0][3],
                type: 'gauge',
                center: ['77%', '50%'],    // 默认全局居中
                radius: '35%',
                min: data[3][3],
                max: data[2][3],
                startAngle: 135,
                endAngle: 45,
                splitNumber: 2,
                axisLine: {            // 坐标轴线
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: [[0.2, 'lime'],[0.8, '#1e90ff'],[1, '#ff4500']],
                        width: 2,
                        shadowColor : '#fff', //默认透明
                        shadowBlur: 10
                    }
                },
                axisTick: {            // 坐标轴小标记
                    length :12,        // 属性length控制线长
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: 'auto',
                        shadowColor : '#fff', //默认透明
                        shadowBlur: 10
                    }
                },
                axisLabel: {
                    show: false,
                    textStyle: {       // 属性lineStyle控制线条样式
                        fontWeight: 'bolder',
                        color: '#fff',
                        shadowColor : '#fff', //默认透明
                        shadowBlur: 10
                    },
                    formatter:function(v){
                        switch (v + '') {
                            case '0' : return 'E';
                            case '1' : return 'Gas';
                            case '2' : return 'F';
                        }
                    }
                },
                splitLine: {           // 分隔线
                    length :15,         // 属性length控制线长
                    lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                        width:3,
                        color: '#fff',
                        shadowColor : '#fff', //默认透明
                        shadowBlur: 10
                    }
                },
                pointer: {
                    width:2,
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 5
                },
                title : {
                    show: false
                },
                detail : {
                    show: false
                },
                data:[{value: data[4][3], name: data[1][3]}]
            },
            {
                name: data[0][4],
                type: 'gauge',
                center : ['77%', '50%'],    // 默认全局居中
                radius : '35%',
                min: data[3][4],
                max: data[2][4],
                startAngle: 315,
                endAngle: 225,
                splitNumber: 2,
                axisLine: {            // 坐标轴线
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: [[0.2, 'lime'],[0.8, '#1e90ff'],[1, '#ff4500']],
                        width: 2,
                        shadowColor : '#fff', //默认透明
                        shadowBlur: 10
                    }
                },
                axisTick: {            // 坐标轴小标记
                    show: false
                },
                axisLabel: {
                    show: false,
                    textStyle: {       // 属性lineStyle控制线条样式
                        fontWeight: 'bolder',
                        color: '#fff',
                        shadowColor : '#fff', //默认透明
                        shadowBlur: 10
                    },
                    formatter:function(v){
                        switch (v + '') {
                            case '0' : return 'H';
                            case '1' : return 'Water';
                            case '2' : return 'C';
                        }
                    }
                },
                splitLine: {           // 分隔线
                    length :15,         // 属性length控制线长
                    lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                        width: 3,
                        color: '#fff',
                        shadowColor : '#fff', //默认透明
                        shadowBlur: 10
                    }
                },
                pointer: {
                    width:2,
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 5
                },
                title : {
                    show: false
                },
                detail : {
                    show: false
                },
                data:[{value: data[4][4], name: data[1][4]}]
            }
        ]
    };
    var working = echarts.init( document.querySelector(rawData.id) );
    working.setOption(option);

    return {
        worker: working,
        option: option
    }
}

function process_2(data){
	function makeParallelAxis(schema) {
	    var parallelAxis = [];
	    for (var i = 1; i < schema.length; i++) {
	        parallelAxis.push({dim: i, name: schema[i]});
	    }
	    return parallelAxis;
	}
  var rawData = []
  for (var i = 0, len = data.rawData.length; i < len; i++) {
      rawData.push([data.rawData[i][0]].concat(data.rawData[i].slice(0, 20)))
    }
	var option = {
		animation: false,
	    title: {
            show: false,
	        text: '产线探头感应数据',
	        sublink: 'https://www.macrofocus.com/public/products/infoscope/datasets/pricesandearnings/',
	        left: 'center',
	        top: 5,
	        itemGap: 0,
	        textStyle: {
              fontSize: 15,
              fontWeight: 'normal',
	            color: '#eee'
	        }
	    },
	    tooltip: {
	        trigger: 'item',
	        formatter: function (params) {
	            var value = (params.value + '').split('.');
	            value = value[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,') + '.' + value[1];
	            return params.seriesName + '<br/>' + params.name + ' : ' + value;
	        }
	    },
	    toolbox: {
	        show: false
	    },
	    brush: {
	        geoIndex: 0,
	        brushLink: 'all',
	        inBrush: {
	            opacity: 1
	        },
	        outOfBrush: {
	            color: '#b99e2a',
	            symbolSize: 4,
	            opacity: 0.1
	        }
	    },
	    parallelAxis: makeParallelAxis(data.schema.slice(0, 20)),
	    parallel: {
	        top: 10,
	        left: 0,
	        right: 0,
	        bottom: 20,
	        // top: 10,
	        // left: 10,
	        // width: 300,
	        // bottom: 10,
	        // layout: 'vertical',
	        axisExpandable: true,
	        axisExpandCenter: 15,
	        axisExpandCount: 10,
	        axisExpandWidth: 50,
	        parallelAxisDefault: {
	            type: 'value',
	            nameLocation: 'start',
	            // nameRotate: 45,
	            // nameLocation: 'end',
	            nameTextStyle: {
	                fontSize: 12
	            },
	            nameGap: 20,
	            splitNumber: 3,
	            tooltip: {
	                show: true
	            },
	            axisLine: {
	                // show: false,
	                lineStyle: {
	                    width: 1,
	                    color: 'rgba(255,255,255,0.3)'
	                }
	            },
	            axisTick: {
	                show: false
	            },
	            splitLine: {
	                show: false
	            }
	        }
	    },
	    series: [
	        
	        {
	            name: 'parallel',
	            type: 'parallel',
	            smooth: true,
	            lineStyle: {
	                normal: {
	                    color: '#577ceb',
	                    width: 0.5,
	                    opacity: 0.6
	                }
	            },
	            blendMode: 'lighter',
	            data: rawData
	        }
	    ]
	};
    var working = echarts.init( document.querySelector(data.id) );

    var start = 1, distance = 20;
    working.setOption(option);
    return {
        schema: data.schema,
        worker: working,
        option: option,
        start: start,
        distance: distance,
        makeParallelAxis: makeParallelAxis
    };
}

function process_3(rawData){
    var option = {

        title: {
            show: false,
            text: 'Customized Pie',
            left: 'center',
            top: 20,
            textStyle: {
                fontSize: 12,
                color: '#ccc'
            }
        },

        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },

        visualMap: {
            show: false,
            min: 80,
            max: 600,
            inRange: {
                colorLightness: [0, 1]
            }
        },
        series : [
            {
                name:'访问来源',
                type:'pie',
                radius : '55%',
                center: ['50%', '55%'],
                data: rawData.data.sort(function (a, b) { return a.value - b.value}),
                roseType: 'angle',
                label: {
                    normal: {
                        show: false,
                        textStyle: {
                            color: 'rgba(255, 255, 255, 0.3)',
                            fontSize: 10
                        }
                    }
                },
                labelLine: {
                    normal: {
                        lineStyle: {
                            color: 'rgba(255, 255, 255, 0.3)'
                        },
                        smooth: 0.2,
                        length: 5,
                        length2: 5
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#c23531',
                        shadowBlur: 200,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };
    echarts.init(document.querySelector(rawData.id)).setOption(option);
}

function process_4(rawData){
    var move_start = 0, distance = 20;
    var option = {
        title : {
            text: '水流控制数据',
            x: 'center',
            align: 'right',
            textStyle: {
                color: '#fff',
                fontSize: 10,
                fontWeight: 'normal'
            }
        },
        grid: {
            top: 30,
            bottom: 20
        },
        tooltip : {
            trigger: 'axis',
            axisPointer: {
                animation: false
            }
        },
        legend: {
            show: false,
            data:['冷却流量','恒温流量'],
            x: 'left'
        },
        dataZoom: [
            {
                show: true,
                realtime: true,
                start: move_start,
                end: move_start + distance,
                top: '94%',
                bottom: 0
            },
            {
                type: 'inside',
                realtime: true,
                start: 65,
                end: 85
            }
        ],
        xAxis : [
            {   
                show: false,
                type : 'category',
                boundaryGap : false,
                axisLine: {onZero: false},
                data : rawData.data[0].map(function (str) {
                    return str.replace(' ', '\n')
                })
            }
        ],
        yAxis: [
            {
                show: false,
                axisLabel: false,
                axisTick: false,
                name: '冷却流量(m^3/s)',
                type: 'value',
                max: 500
            },
            {
                show: false,
                axisLabel: false,
                axisTick: false,
                name: '恒温流量(mm)',
                nameLocation: 'start',
                max: 5,
                type: 'value',
                inverse: true
            }
        ],
        series: [
            {
                name:'冷却流量',
                type:'line',
                animation: false,
                areaStyle: {
                    normal: {}
                },
                lineStyle: {
                    normal: {
                        width: 1
                    }
                },
                markArea: {
                    silent: true,
                    data: [[{
                        xAxis: '2009/9/12\n7:00'
                    }, {
                        xAxis: '2009/9/22\n7:00'
                    }]]
                },
                data: rawData.data[1]
            },
            {
                name:'恒温流量',
                type:'line',
                yAxisIndex:1,
                animation: false,
                areaStyle: {
                    normal: {}
                },
                lineStyle: {
                    normal: {
                        width: 1
                    }
                },
                markArea: {
                    silent: true,
                    data: [[{
                        xAxis: '2016/9/10\n7:00'
                    }, {
                        xAxis: '2016/9/20\n7:00'
                    }]]
                },
                data: rawData.data[2]
            }
        ]
    };
    var working = echarts.init(document.querySelector(rawData.id));
    working.setOption(option);
    return {
        worker: working,
        option: option
    }
}

function process_5(_data){
    var rawData = _data.data;
    var move_start = 0, distance = 20;
    function calculateMA(dayCount, data) {
        var result = [];
        for (var i = 0, len = data.length; i < len; i++) {
            if (i < dayCount) {
                result.push('-');
                continue;
            }
            var sum = 0;
            for (var j = 0; j < dayCount; j++) {
                sum += data[i - j][1];
            }
            result.push(sum / dayCount);
        }
        return result;
    }


    var dates = rawData.map(function (item) {
        return item[0];
    });

    var data = rawData.map(function (item) {
        return [+item[1], +item[2], +item[5], +item[6]];
    });
    var option = {
        title: {
            text: '品质监控图',
            left: 'center',
            textStyle: {
                color: '#fff',
                fontWeight: 'normal',
                fontSize: 12
            }
        },
        legend: {
            show: false,
            data: ['日K', 'MA5', 'MA10', 'MA20', 'MA30'],
            inactiveColor: '#777',
            textStyle: {
                color: '#fff'
            }
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                animation: false,
                lineStyle: {
                    color: '#376df4',
                    width: 2,
                    opacity: 1
                }
            }
        },
        grid: {
            top: 30,
            bottom: 20
        },
        xAxis: {
            type: 'category',
            data: dates,
            axisLine: { lineStyle: { color: '#8392A5' } },
            axisLabel: false,
            axisTick: false
        },
        yAxis: {
            scale: true,
            axisLine: { lineStyle: { color: '#8392A5' } },
            splitLine: { show: false },
            axisLabel: false
        },
        dataZoom: [{
            top: '92%',
            bottom: 0,
            start: move_start,
            end: move_start + distance,
            textStyle: {
                color: '#8392A5'
            },
            handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
            handleSize: '80%'
        }, {
            type: 'inside'
        }],
        animation: false,
        series: [
            {
                type: 'candlestick',
                name: '日K',
                data: data,
                itemStyle: {
                    normal: {
                        color: '#FD1050',
                        color0: '#0CF49B',
                        borderColor: '#FD1050',
                        borderColor0: '#0CF49B'
                    }
                }
            },
            {
                name: 'MA5',
                type: 'line',
                data: calculateMA(5, data),
                smooth: true,
                showSymbol: false,
                lineStyle: {
                    normal: {
                        width: 1
                    }
                }
            },
            {
                name: 'MA10',
                type: 'line',
                data: calculateMA(10, data),
                smooth: true,
                showSymbol: false,
                lineStyle: {
                    normal: {
                        width: 1
                    }
                }
            },
            {
                name: 'MA20',
                type: 'line',
                data: calculateMA(20, data),
                smooth: true,
                showSymbol: false,
                lineStyle: {
                    normal: {
                        width: 1
                    }
                }
            },
            {
                name: 'MA30',
                type: 'line',
                data: calculateMA(30, data),
                smooth: true,
                showSymbol: false,
                lineStyle: {
                    normal: {
                        width: 1
                    }
                }
            }
        ]
    };
    var working = echarts.init(document.querySelector(_data.id));
    working.setOption(option);
    return {
        worker: working,
        option: option
    }
}

function process_6(){
    var move_start = 0, distance = 20;
    var xAxisData = [];
    var data1 = [];
    var data2 = [];
    for (var i = 0; i < 100; i++) {
        xAxisData.push('类目' + i);
        data1.push((Math.sin(i / 5) * (i / 5 -10) + i / 6) * 5);
        data2.push((Math.cos(i / 5) * (i / 5 -10) + i / 6) * 5);
    }

    var option = {
        animation: false,
        title: {
            left: 'center',
            text: '温度恒定检测',
            textStyle: {
                color: '#fff',
                fontSize: 10,
                fontWeight: 'normal'
            }
        },
        grid: {
            top: 30,
            bottom: 20
        },
        tooltip: {},
        xAxis: {
            data: xAxisData,
            silent: false,
            axisTick: false,
            axisLabel: false,
            splitLine: {
                show: false
            }
        },
        yAxis: {
            axisTick: false,
            axisLabel: false,
        },
         dataZoom: [
            {
                id: 'dataZoomX',
                type: 'slider',
                xAxisIndex: [0],
                filterMode: 'filter',
                start: move_start,
                end: move_start + distance,
                top: '92%',
                bottom: 0
            }
        ],
        series: [{
            name: 'bar',
            type: 'bar',
            data: data1,
            animationDelay: function (idx) {
                return idx * 10;
            }
        }, {
            name: 'bar2',
            type: 'bar',
            data: data2,
            animationDelay: function (idx) {
                return idx * 10 + 100;
            }
        }],
        animationEasing: 'elasticOut',
        animationDelayUpdate: function (idx) {
            return idx * 5;
        }
    };

    var working = echarts.init(document.querySelector('.line-4-r'));
    working.setOption(option);
    return {
        worker: working,
        option: option
    }
}