import { useEffect, useState } from "react";
import { Line, Pie } from "react-chartjs-2";
import _ from "lodash";
// import { width } from "./some";
// defaults.
const width = "400px";
const colorMap = [
  "#4810f5",
  "#17c9c9",
  "#c4f42c",
  "#69a69f",
  "#18cb2f",
  "#ef46e2",
  "#578bac",
  "#d0a781",
  "#a1a781",
  "#217795",
  "#277f5c",
  "#b4f135",
  "#e17bb2",
  "#e23881",
  "#6a2dbf",
  "#bfd62c",
  "#ffb4b5",
  "#7b7f73",
  "#14e5b3",
];

const ChartsData = [
  [
    "/api/fundingRates",
    (x) => {
      return {
        labels: _.range(0, 40),
        datasets: x.map((x, index) => ({
          label: x[0],
          backgroundColor: colorMap[index],
          borderColor: colorMap[index],
          data: x[1].slice(60).map((x) => Number(x) * 10000),
          color: "black",
          hidden: true,
        })),
      };
    },
    "700px",
  ],
  [
    "/api/dotIncomeInfo",
    ([sum, list, list2]) => {
      const labels = list.map((_, i) => i);
      return {
        labels: labels,
        datasets: [
          {
            label: "DOT资金费",
            backgroundColor: "rgb(255, 99, 132)",
            borderColor: "rgb(255, 99, 132)",
            data: list,
            color: "#222",
          },
          {
            label: "DOT资金费（累加）",
            backgroundColor: "orange",
            borderColor: "orange",
            data: list2,
          },
        ],
      };
    },
    width,
  ],
  // [
  //   "/api/data/a",
  //   (list) => {
  //     const labels = list.map((_, i) => i);
  //     return {
  //       labels: labels,
  //       datasets: [
  //         {
  //           label: "DOT资金费",
  //           backgroundColor: "rgb(255, 99, 132)",
  //           borderColor: "rgb(255, 99, 132)",
  //           data: list,
  //         },
  //       ],
  //     };
  //   },
  //   width,
  // ],
  [
    "/api/data/apyHistory",
    (list) => {
      const labels = list[0].map((_, i) => i);
      return {
        labels: labels,
        datasets: list
          // .filter(x => x[0][0].startsWith('DOT'))
          .map((l, i) => {
            return {
              label: l[0][0],
              backgroundColor: colorMap[i],
              borderColor: colorMap[i],
              data: l.map((x) => x[1]),
              hidden: true,
            };
          }),
      };
    },
    "2000px",
  ],
];
const PieChartsData = [
  [
    "/api/portfolio",
    (list) => {
      const labels = list.map((x) => `${x[0]}[${x[3]}]`);
      const data = {
        labels: labels,
        datasets: [
          {
            label: "ADA资金费",
            backgroundColor: colorMap.slice(0, list.length),
            borderColor: colorMap.slice(0, list.length),
            data: list.map((x) => x[2]),
          },
        ],
      };
      return data;
    },
    "400px",
  ],
];

const Chart = ({ api, fn, type, width }) => {
  const [data, setData] = useState(undefined);
  useEffect(() => {
    fetch(api)
      .then((x) => x.json())
      .then((x) => setData(fn(x)));
  }, []);

  return data ? (
    <div style={{ width: width }}>
      <Line
        options={{
          color: "black",
          backgroundColor: "black",
          borderColor: "black",
          scales: {
            x: {
              ticks: {
                color: "black",
              },
            },
            y: {
              ticks: {
                color: "black",
              },
            },
          },
        }}
        data={data}
      />
    </div>
  ) : (
    ""
  );
};
const PieChart = ({ api, fn, type, width }) => {
  const [data, setData] = useState(undefined);
  useEffect(() => {
    fetch(api)
      .then((x) => x.json())
      .then((x) => setData(fn(x)));
  }, []);

  return data ? (
    <div style={{ width: width }}>
      <Pie
        options={{
          color: "black",
          backgroundColor: "black",
          borderColor: "black",
        }}
        data={data}
      />
    </div>
  ) : (
    ""
  );
};
export const Charts = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {PieChartsData.map(([api, fn, width]) => (
        <PieChart width={width} api={api} fn={fn} />
      ))}
      {ChartsData.map(([api, fn, width]) => (
        <Chart width={width} api={api} fn={fn} />
      ))}
      
    </div>
  );
};
