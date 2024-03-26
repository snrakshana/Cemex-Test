const canvas = document.getElementById("chart");
const ctx = canvas.getContext("2d");
// const dpi = window.devicePixelRatio;
// ctx.scale(dpi, dpi);

// Define data
const data = {
  labels: [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ],
  values: [2, 0, 4, 2, 2, 0, 7, 1, 1, 0, 1, 1],
  color: [
    "#EBEBEB",
    "#000",
    "#2998FF80",
    "#EBEBEB",
    "#EBEBEB",
    "#000",
    "#2998FF80",
    "#2998FF",
    "#EBEBEB",
    "#000",
    "#EBEBEB",
    "#EBEBEB",
  ],
};

// Set chart dimensions
const width = canvas.width;
const height = canvas.height;
const barWidth = 20;
const barSpacing = 7;
const chartStartX = 40;
const chartStartY = height - 30;
const chartEndX = width - 20;
const chartEndY = 20;
const chartWidth = chartEndX - chartStartX;
const chartHeight = chartStartY - chartEndY;
const maxValue = 10;

// Draw lines
for (let i = 0; i <= 5; i++) {
  const y = chartStartY - (chartHeight / 5) * i;
  ctx.beginPath();
  ctx.moveTo(chartStartX, y);
  ctx.lineTo(chartEndX, y);
  ctx.lineWidth = 1;
  ctx.strokeStyle = "#dddddd";
  ctx.stroke();
}

// x axis
for (let i = 0; i < data.labels.length; i++) {
  const x = chartStartX - 5 + (barWidth + barSpacing) * i + barSpacing;
  ctx.font = "9px Noto Sans JP";
  ctx.fillStyle = "#919DC2";
  ctx.fillText(data.labels[i], x, chartStartY + 20);
}

// y axis
for (let i = 0; i <= 5; i++) {
  const y = chartStartY - (chartHeight / 5) * i;
  ctx.font = "10px Noto Sans JP";
  ctx.fillStyle = "#919DC2";
  ctx.fillText(((maxValue / 5) * i).toFixed(0), chartStartX - 30, y);
}

// Draw bars
for (let i = 0; i < data.values.length; i++) {
  const barHeight = (chartHeight / maxValue) * data.values[i];
  const x = chartStartX - 5 + (barWidth + barSpacing) * i + barSpacing;
  const y = chartStartY - barHeight;
  ctx.fillStyle = data.color[i];
  ctx.beginPath();
  ctx.roundRect(x, y, barWidth, barHeight, [6.74, 6.74, 0, 0]);
  ctx.stroke();
  ctx.fill();
}
