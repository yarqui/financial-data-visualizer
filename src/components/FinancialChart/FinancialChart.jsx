import PropTypes from "prop-types";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";
import s from "./FinancialChart.module.css";

ChartJS.defaults.font = {
  family: "Montserrat",
  size: "12px",
};

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const FinancialChart = ({ financialData }) => {
  const { symbol = "No data", name = "No data", data } = financialData;

  const commonOptions = {
    tension: 0.3,
  };

  const chartData = {
    labels: data.map((item) => item.date),
    datasets: [
      {
        label: "Net Income",
        data: data.map(({ netIncome }) => netIncome ?? "No data"),
        borderColor: "rgb(255, 87, 51)",
        backgroundColor: "rgba(255, 87, 51, 0.2)",
        ...commonOptions,
      },
      {
        label: "Total Revenue",
        data: data.map(({ totalRevenue }) => totalRevenue ?? "No data"),
        borderColor: "rgb(255, 189, 51)",
        backgroundColor: "rgba(255, 189, 51, 0.2)",
        ...commonOptions,
      },
      {
        label: "Shareholder Equity",
        data: data.map(
          ({ shareholderEquity }) => shareholderEquity ?? "No data"
        ),
        borderColor: "rgb(173, 204, 38)",
        backgroundColor: "rgba(219, 255, 51, 0.2)",
        ...commonOptions,
      },
    ],
  };

  const chartOptions = {
    scales: {
      y: {
        ticks: {
          callback: (value) => value / 1e9 + "B", // Convert to billions for display
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          usePointStyle: true,
          padding: 40,
          boxWidth: 20,
          boxHeight: 20,
          font: {
            size: 14,
          },
        },
      },
      tooltip: {
        bodyFont: {
          size: 14,
        },
        titleFont: {
          size: 14,
        },
      },
      title: {
        text: `${name} (${symbol})`,
        display: true,
        font: {
          size: 16,
          weight: "bold",
        },
      },
    },
  };

  return <Line className={s.chart} data={chartData} options={chartOptions} />;
};

FinancialChart.propTypes = {
  financialData: PropTypes.shape({
    symbol: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired,
  }),
};

export default FinancialChart;
