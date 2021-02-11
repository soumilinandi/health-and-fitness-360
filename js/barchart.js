window.onload = function () {
  
  var chart = new CanvasJS.Chart("chartContainer", {
    animationEnabled: true,	
    axisY: {
      title: "Change in Respective units",
      titleFontColor: "#4F81BC",
      lineColor: "#4F81BC",
      labelFontColor: "#4F81BC",
      tickColor: "#4F81BC"
    },
    toolTip: {
      shared: true
    },
    legend: {
      cursor:"pointer",
      itemclick: toggleDataSeries
    },
    data: [{
      type: "column",
      name: "Last measurement",
      legendText: "Last measurement",
      showInLegend: true, 
      dataPoints:[
        { label: "Sp02", y: 97 },
        { label: "Calories/day", y: 350 },
        { label: "Heart Rate", y: 75 },
        { label: "Water glass/day", y: 8 },
        { label: "Energy Level", y: 76},
        { label: "Sleep hours", y: 9 }
      ]
    },
    {
      type: "column",	
      name: "New measurement",
      legendText: "New measurement",
      axisYType: "secondary",
      showInLegend: true,
      dataPoints:[
        { label: "Sp02", y: 94 },
        { label: "Calories/day", y: 330 },
        { label: "Heart Rate", y: 79 },
        { label: "Water glass/day", y: 6 },
        { label: "Energy Level", y: 68},
        { label: "Sleep hours", y: 8 }
      ]
    }]
  });
  chart.render();
  
  function toggleDataSeries(e) {
    if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
      e.dataSeries.visible = false;
    }
    else {
      e.dataSeries.visible = true;
    }
    chart.render();
  }
  
}
