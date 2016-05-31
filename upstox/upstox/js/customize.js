wow = new WOW(
  {
    animateClass: 'animated',
    offset: 100
  }
);
wow.init();
$.fn.isOnScreen = function(){
    var element = this.get(0);
    var bounds = element.getBoundingClientRect();
    return bounds.top < window.innerHeight && bounds.bottom > 0;
}
var count=0;
$(window).scroll(function () {
    createChart();
});

$(document).ready(function(){
	createChart();
})
function createChart(){
	if ($("#container").isOnScreen && count==0) 
	{
	    count++;
	    $('#container').highcharts({
	        chart: {
	            type: 'areaspline'
	        },
	        title: {
	            text: ''
	        },
	        xAxis: {
	        	gridLineColor: '#D8D8D8',
	            gridLineWidth: 1,
	            categories: ['2004','2005','2006', '2007', '2008', '2009', '2010', '2011', '2012' ,'2013','2014','2015','2016'],
	            tickmarkPlacement: 'on',
	             title: {
	                text: null
	            },
	            labels: {
	                enabled: false
	            }
	        },
	        yAxis: {
	        	gridLineWidth: 0,
	            title: {
	                text: null
	            },
	            labels: {
	                enabled: false
	            }
	        },
	        tooltip: {
	            shared: true,
	            valueSuffix: 'Lac'
	        },
	        plotOptions: {
	        	areaspline: {
	              marker: {
	                enabled: false
	              }
	            },
	            area: {
	                stacking: 'normal',
	                lineColor: '#666666',
	                lineWidth: 1,
	            },
	            
	            series: {
	                fillOpacity: 0.5
	            }
	        },
	        legend: {
	            layout: 'vertical',
	            align: 'left',
	            verticalAlign: 'middle',
	            symbol:'circle',
	            symbolHeight:16,
	            symbolRadius: 8,
	            borderWidth: 0
	        },
	        credits: {
	            enabled: false
	          },
	          exporting: { 
	        	  enabled: false 
	          },
	          series: [{
	              name: 'EQUITY',
	              color: '#2ED392',
	              data: [1,14,20,32,50,20,35,52,30,35,70,74]
	          }, {
	              name: 'GOLD',
	              color: "#8D88DB",
	              data: [1,2,4,7,10,12,20,25,30,45,30,35]
	          }, {
	              name: 'FIXED DEPOSITS',
	              color:'#828FA4',
	              data: [1,1,3,4,5,6,7,8,9,10,11,12]
	          }]
	    });
    }
}

