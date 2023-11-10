// 立即执行函数,防止变量污染全局
// 初始化接口，返回ECharts实例
(function () {
  $.ajax({
    type: 'get',
    url: './json/indexx.json',
    dataType: 'json',
    success: function (data1) {
      console.log(data1);

      // 实例化对象
      let myChart = echarts.init(document.querySelector('.bar .chart'));
      // 指定配置项和数据
      let option = {
        color: ["#2f89cf"],
        // 提示框组件
        tooltip: {
          // 类型
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          left: "0%",
          top: "10px",
          right: "0%",
          bottom: "4%",
          containLabel: true
        },
        xAxis:
        {
          type: 'category',
          data: data1.zhuzhuang1_xAxis,
          axisTick: {
            show: false
            // 去除刻度
          },
          // 修改刻度标签 相关样式
          // x轴的文字颜色和大小
          axisLabel: {

            color: "rgba(255,255,255,0.7)",
            fontSize: "10"
          },
          // 去除x坐标轴的显示
          axisLine: {
            show: false
          }
        },
        yAxis:
        {
          type: "value",
          axisTick: {
            show: false
          },
          axisLabel: {
            color: "rgba(255,255,255,.6)",
            fontSize: "12"
          },
          // y轴分割线颜色
          splitLine: {
            lineStyle: {
              color: "#012f4a"
            }
          },
        },
        series: [
          {
            name: 'Direct',
            type: 'bar',
            barWidth: '35%',
            data: data1.zhuzhuang1_series,
            itemStyle: {
              // 修改柱子圆角
              barBorderRadius: 4
            }
          }
        ]
      };
      myChart.setOption(option);
      //  应用到实际图表
      window.addEventListener("resize", function () {
        myChart.resize();
        // 图表自适应缩放
      });

    }
  })
})();
(function () {
  $.ajax({
    type: 'get',
    url: './json/indexx.json',
    dataType: 'json',
    success: function (data1) {
      let myChart = echarts.init(document.querySelector(".bar2 .chart"));

      let myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
      let option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          top: "10%",
          left: "22%",
          bottom: "10%",
          // containLabel:true
          // 防止标签溢出
          // https://blog.csdn.net/Disany/article/details/112042579#:~:text=containLabel%E8%BF%99%E4%B8%AA%E5%B1%9E%E6%80%A7%E7%9A%84%E7%94%A8%E9%80%94%EF%BC%8C%E8%A7%81%E4%B8%8B%E5%9B%BE%EF%BC%9A%20%E8%AE%BE%E7%BD%AE%20containLabel%3A,true%20%E5%B8%B8%E7%94%A8%E4%BA%8E%20%E9%98%B2%E6%AD%A2%E6%A0%87%E7%AD%BE%E6%BA%A2%E5%87%BA%EF%BC%8C%E8%AE%A1%E7%AE%97%E8%B7%9D%E7%A6%BB%E6%97%B6%E5%80%99%E4%BC%9A%E8%AE%A1%E7%AE%97%E5%AE%B9%E5%99%A8%E8%BE%B9%E5%88%B0%E6%A0%87%E7%AD%BE%E7%9A%84%E8%B7%9D%E7%A6%BB%EF%BC%8C%E5%90%A6%E5%88%99%E8%AE%A1%E7%AE%97%E5%AE%B9%E5%99%A8%E8%BE%B9%E7%BC%98%E5%88%B0%E5%88%BB%E5%BA%A6%E7%BA%BF%E7%9A%84%E8%B7%9D%E7%A6%BB%E3%80%82%203%E3%80%81%E8%B0%83%E6%95%B4%E5%9B%BE%E8%A1%A8%E7%9A%84%E8%83%8C%E6%99%AF%E6%A0%B7%E5%BC%8F
        },
        xAxis: {
          show: false
        },
        yAxis: [{
          type: 'category',
          // 类目轴
          data: data1.zhuzhuang2_yAxis,
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: "#fff"
          }
        },
        {
          data: data1.zhuzhuang2_yAxis1,
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: "#fff"
          }
        }
        ],
        series: [
          {
            name: '条',
            type: 'bar',
            data: data1.zhuzhuang2_series
            ,
            yAxisIndex: 0,
            itemStyle: {
              barBorderRadius: 20,
              color: function (params) {
                return myColor[params.dataIndex];
                //    params传进来的是柱子对象
                // dataIndex是当前柱子的索引号
              }
            },
            barCategoryGap: 50,
            // 柱子间距离
            barWidth: 10,
            // 柱子宽度
            label:
            // 显示柱子内的文字
            {
              show: true,
              position: "inside",
              formatter: "{c}%"
              // {c}会自动解析为data里的数据
              // {a}系列名 {b}数据名 {c}数据值
            },

          },
          {
            name: '框',
            type: 'bar',
            yAxisIndex: 1,
            barCategoryGap: 50,
            barWidth: 15,
            itemStyle: {
              color: "none",
              borderColor: "#00c1de",
              borderWidth: 3,
              barBorderRadius: 15

            },
            data: data1.zhuzhuang2_series1
          }
        ]
      };
      myChart.setOption(option);
      window.addEventListener("resize", function () {
        myChart.resize();
        // 图表自适应缩放
      });
    }
  })
})();
(function () {
  $.ajax({
    type: 'get',
    url: './json/indexx.json',
    dataType: 'json',
    success: function (data1) {
      let myChart = echarts.init(document.querySelector('.line .chart'))
      option = {
        color: ["#00f2f1", "#ed3f35"],
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          textStyle: {
            color: "#4c9bfd"
          },
          right: '10%'
        },
        grid: {
          top: '20%',
          left: '3%',
          right: '4%',
          bottom: '3%',
          show: true,
          borderColor: '#012f4a',
          containLabel: true
          //   显示刻度标签
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          //   是否从坐标轴零点开始  
          data: data1.zhexian1_xAxis,
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          axisLabel: {
            color: "#4c9bfd",
            fontSize: "8",
          }
        },
        yAxis: {
          type: 'value',
          splitLine: {
            lineStyle: {
              color: "#012f4a"
            },
          },
          axisLabel: {
            color: "#66ccff",
          }
        },
        series: [
          {
            name: '新增粉丝',
            type: 'line',
            stack: 'Total',
            // 曲线堆叠
            smooth: true,
            // 将曲线改成圆滑的
            data: data1.zhexian1_series
          },
          {
            name: '新增游客',
            type: 'line',
            stack: 'Total',
            smooth: true,
            data: data1.zhexian1_series1
          },
        ]
      };
      myChart.setOption(option);
      window.addEventListener("resize", function () {
        myChart.resize();
        // 图表自适应缩放
      })
    }
  })
})();
(function () {
  $.ajax({
    type: 'get',
    url: './json/indexx.json',
    dataType: 'json',
    success: function (data1) {
      let myChart = echarts.init(document.querySelector('.line2 .chart'))
      option = {
        tooltip: {
          trigger: 'axis',
        },
        legend: {
          top: "0%",
          textStyle: {
            color: "rgba(255,255,255,.5)",
            fontSize: "12"
          }
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        grid: {
          left: '10%',
          right: '10%',
          bottom: '10%',
          top: "30%",
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            axisLabel: {
              color: "#66ccff",
            },
            data: data1.zhexian2_xAxis
          }
        ],
        yAxis: [
          {
            axisTick: { show: false },
            axisLine: {
              lineStyle: {
                color: "rgba(255,255,255,.1)"
              },
            },
            splitLine: {
              lineStyle: {
                color: "rgba(255,255,255,.1)"
              }
            },
            type: 'value'
          }
        ],
        series: [
          {
            name: '播放量',
            type: 'line',
            areaStyle: {
              color: new echarts.graphic.LinearGradient(
                0,
                0,
                0,
                1,
                [
                  {
                    offset: 0,
                    color: "rgba(1, 132, 213, 0.1)"
                  },
                  {
                    offset: 0.8,
                    color: "rgba(1, 132, 213, 0.6)"
                  }
                ],
                false
              ),
              shadowColor: "rgba(0, 0, 0, 0.1)"
            },
            lineStyle: {
              color: "#0184d5",
              width: 2
            },
            symbol: "circle",
            symbolSize: 10,
            showSymbol: false,
            // 开始不显示,鼠标经过才显示
            itemStyle: {
              color: "#0184d5",
              borderColor: "rgba(221,220,107,.1)",
              borderWidth: 12

            },
            smooth: true,
            data: data1.zhexian2_series
          },
          {
            name: '转发量',
            type: 'line',
            areaStyle: {
              color: new echarts.graphic.LinearGradient(
                0,
                0,
                0,
                1,
                [
                  {
                    offset: 0,
                    color: "rgba(0, 216, 135, 0.4)"
                  },
                  {
                    offset: 0.8,
                    color: "rgba(0, 216, 135, 0.1)"
                  }
                ],
                false
              ),
              shadowColor: "rgba(0, 0, 0, 0.1)"
            },
            lineStyle: {
              color: "#00FFFF",
              width: 2
            },
            symbol: "circle",
            symbolSize: 10,
            showSymbol: false,
            itemStyle: {
              color: "#00d887",
              borderColor: "rgba(221,220,107,.1)",
              borderWidth: 12
            },
            smooth: true,
            data: data1.zhexian2_series1
          },
        ]
      };
      myChart.setOption(option);
      window.addEventListener("resize", function () {
        myChart.resize();
        // 图表自适应缩放
      })
    }
  })
})();
(function () {
  $.ajax({
    type: 'get',
    url: './json/indexx.json',
    dataType: 'json',
    success: function (data1) {
      let myChart = echarts.init(document.querySelector('.pie .chart'))
      option = {
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
          bottom: "0%",
          itemWidth: 10,
          itemHeight: 10,
          left: 10,
          textStyle: {
            color: "rgba(255,255,255,.5)",
            fontSize: "12"
          },
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: ['40%', '60%'],
            // 修改内圆与外圆的大小
            center: ['50%', '45%'],
            avoidLabelOverlap: false,
            label: {
              show: true,
              color: "#00fff"
              // position: 'center'
            },
            labelLine: {
              show: true
            },
            color: ["#065aab", "#066eab", "#0682ab", "#0696ab", "#06a0ab"],
            data: data1.bing1_series
          }
        ]
      };
      myChart.setOption(option);
      window.addEventListener("resize", function () {
        myChart.resize();
        // 图表自适应缩放
      })
    }
  })
})();
(function () {
  $.ajax({
    type: 'get',
    url: './json/indexx.json',
    dataType: 'json',
    success: function (data1) {
      let myChart = echarts.init(document.querySelector('.pie2 .chart'))
      option = {
        color: [
          "#006cff",
          "#60cda0",
          "#ed8884",
          "#ff9f7f",
          "#0096ff",
          "#9fe6b8",
          "#32c5e9",
          "#1d9dff"
        ],
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        label: {
          color: "rgba(0,255,255,255)",
          fontSize: 10
        },
        legend: {
          left: 'center',
          top: 'bottom',
          itemHeight: 5,
          itemWidth: 5,
          textStyle: {
            color: "rgba(255,255,255,0.)"
          }
        },
        series: [
          {
            name: '地区分布',
            type: 'pie',
            radius: ['10%', '70%'],
            center: ['50%', '50%'],
            roseType: 'radius',
            // 半径模式
            labelLine: {
              length: 6,
              length2: 8,
            },
            data: data1.bing2_series
          }
        ]
      };

      myChart.setOption(option);
      window.addEventListener("resize", function () {
        myChart.resize();
        // 图表自适应缩放
      })
    }
  })
})();
(function () {
  $.ajax({
    type: 'get',
    url: './json/indexx.json',
    dataType: 'json',
    success: function (data1) {
      let myChart = echarts.init(document.querySelector('.map .chart2'))
      let geoCoordMap = {
        '上海': [121.4648, 31.2891],
        '东莞': [113.8953, 22.901],
        '东营': [118.7073, 37.5513],
        '中山': [113.4229, 22.478],
        '临汾': [111.4783, 36.1615],
        '临沂': [118.3118, 35.2936],
        '丹东': [124.541, 40.4242],
        '丽水': [119.5642, 28.1854],
        '乌鲁木齐': [87.9236, 43.5883],
        '佛山': [112.8955, 23.1097],
        '保定': [115.0488, 39.0948],
        '兰州': [103.5901, 36.3043],
        '包头': [110.3467, 41.4899],
        '北京': [116.4551, 40.2539],
        '北海': [109.314, 21.6211],
        '南京': [118.8062, 31.9208],
        '南宁': [108.479, 23.1152],
        '南昌': [116.0046, 28.6633],
        '南通': [121.1023, 32.1625],
        '厦门': [118.1689, 24.6478],
        '台州': [121.1353, 28.6688],
        '合肥': [117.29, 32.0581],
        '呼和浩特': [111.4124, 40.4901],
        '咸阳': [108.4131, 34.8706],
        '哈尔滨': [127.9688, 45.368],
        '唐山': [118.4766, 39.6826],
        '嘉兴': [120.9155, 30.6354],
        '大同': [113.7854, 39.8035],
        '大连': [122.2229, 39.4409],
        '天津': [117.4219, 39.4189],
        '太原': [112.3352, 37.9413],
        '威海': [121.9482, 37.1393],
        '宁波': [121.5967, 29.6466],
        '宝鸡': [107.1826, 34.3433],
        '宿迁': [118.5535, 33.7775],
        '常州': [119.4543, 31.5582],
        '广州': [113.5107, 23.2196],
        '廊坊': [116.521, 39.0509],
        '延安': [109.1052, 36.4252],
        '张家口': [115.1477, 40.8527],
        '徐州': [117.5208, 34.3268],
        '德州': [116.6858, 37.2107],
        '惠州': [114.6204, 23.1647],
        '成都': [103.9526, 30.7617],
        '扬州': [119.4653, 32.8162],
        '承德': [117.5757, 41.4075],
        '拉萨': [91.1865, 30.1465],
        '无锡': [120.3442, 31.5527],
        '日照': [119.2786, 35.5023],
        '昆明': [102.9199, 25.4663],
        '杭州': [119.5313, 29.8773],
        '枣庄': [117.323, 34.8926],
        '柳州': [109.3799, 24.9774],
        '株洲': [113.5327, 27.0319],
        '武汉': [114.3896, 30.6628],
        '汕头': [117.1692, 23.3405],
        '江门': [112.6318, 22.1484],
        '沈阳': [123.1238, 42.1216],
        '沧州': [116.8286, 38.2104],
        '河源': [114.917, 23.9722],
        '泉州': [118.3228, 25.1147],
        '泰安': [117.0264, 36.0516],
        '泰州': [120.0586, 32.5525],
        '济南': [117.1582, 36.8701],
        '济宁': [116.8286, 35.3375],
        '海口': [110.3893, 19.8516],
        '淄博': [118.0371, 36.6064],
        '淮安': [118.927, 33.4039],
        '深圳': [114.5435, 22.5439],
        '清远': [112.9175, 24.3292],
        '温州': [120.498, 27.8119],
        '渭南': [109.7864, 35.0299],
        '湖州': [119.8608, 30.7782],
        '湘潭': [112.5439, 27.7075],
        '滨州': [117.8174, 37.4963],
        '潍坊': [119.0918, 36.524],
        '烟台': [120.7397, 37.5128],
        '玉溪': [101.9312, 23.8898],
        '珠海': [113.7305, 22.1155],
        '盐城': [120.2234, 33.5577],
        '盘锦': [121.9482, 41.0449],
        '石家庄': [114.4995, 38.1006],
        '福州': [119.4543, 25.9222],
        '秦皇岛': [119.2126, 40.0232],
        '绍兴': [120.564, 29.7565],
        '聊城': [115.9167, 36.4032],
        '肇庆': [112.1265, 23.5822],
        '舟山': [122.2559, 30.2234],
        '苏州': [120.6519, 31.3989],
        '莱芜': [117.6526, 36.2714],
        '菏泽': [115.6201, 35.2057],
        '营口': [122.4316, 40.4297],
        '葫芦岛': [120.1575, 40.578],
        '衡水': [115.8838, 37.7161],
        '衢州': [118.6853, 28.8666],
        '西宁': [101.4038, 36.8207],
        '西安': [109.1162, 34.2004],
        '贵阳': [106.6992, 26.7682],
        '连云港': [119.1248, 34.552],
        '邢台': [114.8071, 37.2821],
        '邯郸': [114.4775, 36.535],
        '郑州': [113.4668, 34.6234],
        '鄂尔多斯': [108.9734, 39.2487],
        '重庆': [107.7539, 30.1904],
        '金华': [120.0037, 29.1028],
        '铜川': [109.0393, 35.1947],
        '银川': [106.3586, 38.1775],
        '镇江': [119.4763, 31.9702],
        '长春': [125.8154, 44.2584],
        '长沙': [113.0823, 28.2568],
        '长治': [112.8625, 36.4746],
        '阳泉': [113.4778, 38.0951],
        '青岛': [120.4651, 36.3373],
        '韶关': [113.7964, 24.7028]
      };

      let XAData = [
        [{ name: '西安' }, { name: '北京', value: 100 }],
        [{ name: '西安' }, { name: '上海', value: 100 }],
        [{ name: '西安' }, { name: '广州', value: 100 }],
        [{ name: '西安' }, { name: '西宁', value: 100 }],
        [{ name: '西安' }, { name: '银川', value: 100 }]
      ];

      let XNData = [
        [{ name: '西宁' }, { name: '北京', value: 100 }],
        [{ name: '西宁' }, { name: '上海', value: 100 }],
        [{ name: '西宁' }, { name: '广州', value: 100 }],
        [{ name: '西宁' }, { name: '西安', value: 100 }],
        [{ name: '西宁' }, { name: '银川', value: 100 }]
      ];

      let YCData = [
        [{ name: '银川' }, { name: '北京', value: 100 }],
        [{ name: '银川' }, { name: '广州', value: 100 }],
        [{ name: '银川' }, { name: '上海', value: 100 }],
        [{ name: '银川' }, { name: '西安', value: 100 }],
        [{ name: '银川' }, { name: '西宁', value: 100 }],
      ];

      let planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';
      //let planePath = 'arrow';
      let convertData = function (data) {

        let res = [];
        for (let i = 0; i < data.length; i++) {

          let dataItem = data[i];

          let fromCoord = geoCoordMap[dataItem[0].name];
          let toCoord = geoCoordMap[dataItem[1].name];
          if (fromCoord && toCoord) {
            res.push({
              fromName: dataItem[0].name,
              toName: dataItem[1].name,
              coords: [fromCoord, toCoord],
              value: dataItem[1].value
            });
          }
        }
        return res;

      };

      let color = ['#a6c84c', '#ffa022', '#46bee9'];//航线的颜色
      let series = [];
      [['西安', XAData], ['西宁', XNData], ['银川', YCData]].forEach(function (item, i) {
        series.push({
          name: item[0] + ' Top3',
          type: 'lines',
          zlevel: 1,
          effect: {
            show: true,
            period: 6,
            trailLength: 0.7,
            color: 'red',   //arrow箭头的颜色
            symbolSize: 3
          },
          lineStyle: {
            normal: {
              color: color[i],
              width: 0,
              curveness: 0.2
            }
          },
          data: convertData(item[1])
        },
          {
            name: item[0] + ' Top3',
            type: 'lines',
            zlevel: 2,
            symbol: ['none', 'arrow'],
            symbolSize: 10,
            effect: {
              show: true,
              period: 6,
              trailLength: 0,
              symbol: planePath,
              symbolSize: 15
            },
            lineStyle: {
              normal: {
                color: color[i],
                width: 1,
                opacity: 0.6,
                curveness: 0.2
              }
            },
            data: convertData(item[1])
          },
          {
            name: item[0] + ' Top3',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            rippleEffect: {
              brushType: 'stroke'
            },
            label: {
              normal: {
                show: true,
                position: 'right',
                formatter: '{b}'
              }
            },
            symbolSize: function (val) {
              return val[2] / 8;
            },
            itemStyle: {
              normal: {
                color: color[i],
              },
              emphasis: {
                areaColor: '#2B91B7'
              }
            },
            data: item[1].map(function (dataItem) {
              return {
                name: dataItem[1].name,
                value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
              };
            })
          });
      });
      let option = {
        tooltip: {
          trigger: 'item',
          formatter: function (params, ticket, callback) {
            if (params.seriesType == "effectScatter") {
              return "线路：" + params.data.name + "" + params.data.value[2];
            } else if (params.seriesType == "lines") {
              return params.data.fromName + ">" + params.data.toName + "<br />" + params.data.value;
            } else {
              return params.name;
            }
          }
        },
        legend: {
          orient: 'vertical',
          top: '0',
          left: 'right',
          data: data1.w1,
          textStyle: {
            color: '#fff'
          },
          selectedMode: 'multiple'
        },
        geo: {
          map: 'china',
          label: {
            emphasis: {
              show: true,
              color: '#fff'
            }
          },
          roam: true,
          itemStyle: {
            normal: {
              // 地图省份的背景颜色
              areaColor: 'rgba(20,41,87,0.6)',
              borderColor: '#195BB9',
              borderWidth: 1,
            },
            emphasis: {
              areaColor: '#2B91B7'
            }
          }
        },
        series: series
      };
      myChart.setOption(option);
      window.addEventListener("resize", function () {
        myChart.resize();
        // 图表自适应缩放
      })
    }
  })
})()