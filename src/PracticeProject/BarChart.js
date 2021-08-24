import React, { useEffect, useRef, useState } from "react";
import Highcharts from "highcharts";
import "./BarChart.css";
export default function BarChart() {
  const refContainer = useRef(null);
  const [dataSource, setDataSource] = useState([]);
  useEffect(() => {
    const chart = Highcharts.chart(refContainer.current, {
      chart: {
        type: "bar",
      },

      title: {
        text: "Bar Chart Title",
      },

      subtitle: {
        text: "Lorem Ipsum is simply dummy text",
      },

      xAxis: {
        categories: ["Y1", "Y2", "Y3", "Y4", "Y5"],

        title: {
          text: "Y Axis Title",
        },
        crosshair: true,
      },
      yAxis: {
        min: 0,
        title: {
          text: "X Axis Title",
        },
      },

      tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat:
          '<tr><td style= "color:{series.color}; padding-0">{series.name}: </td>' +
          '<td style="padding:0"><b>{point.y}</b></td></tr>',
        footerFormat: "</table>",
        shared: true,
        useHTML: true,
      },

      credits: {
        enabled: false,
      },

      series: dataSource,
    });

    if (dataSource.length > 0) {
      chart.hideLoading();
    }
  }, [dataSource]);

  useEffect(() => {
    setTimeout(() => {
      setDataSource([
        {
          name: "Japan",
          data: [50, 72, 88, 92, 34],
        },
        {
          name: "Germany",
          data: [84, 79, 99, 94, 66],
        },
        {
          name: "London",
          data: [49, 39, 47, 40, 42],
        },
        {
          name: "Canada",
          data: [43, 34, 77, 35, 53],
        },
      ]);
    }, 2000);
  }, []);

  return (
    <div className="App">
      <h3>Bar chart in React-</h3>
      <div ref={refContainer} />
    </div>
  );
}
