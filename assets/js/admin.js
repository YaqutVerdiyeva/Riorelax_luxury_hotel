const xValues = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const yValues = [75, 54, 65, 87, 46, 90, 122, 110, 60, 95, 45, 50];

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [
      {
        fill: false,
        lineTension: 0,
        pointRadius: 5,
        backgroundColor: "#977a5e",
        borderColor: "#977a5e",
        data: yValues,
      },
    ],
  },
  options: {
    legend: { display: false },
    scales: {
      yAxes: [{ ticks: { min: 10, max: 150 } }],
    },
  },
});

var xxValues = [
  "CLASSIC BALCONY ROOM",
  "SUPERIOR DOUBLE ROOM",
  "SUPER BALCONY DOUBLE ROOM",
  "DELUX DOUBLE ROOM",
];
var yyValues = [55, 49, 46, 37];
var barColors = ["#977a5e", "#755e48", "#a0866e", "#c5b09d"];

new Chart("myChartt", {
  type: "pie",
  data: {
    labels: xxValues,
    datasets: [
      {
        backgroundColor: barColors,
        data: yyValues,
      },
    ],
  },
  options: {
    title: {
      display: true,
    },
  },
});
