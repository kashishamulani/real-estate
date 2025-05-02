import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale);

export default function OverviewChart() {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Revenue',
        data: [4000, 3400, 3800, 2500, 6000, 5000, 1500, 4700, 3200, 4900, 5300, 4100],
        backgroundColor: '#ffffff',
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        ticks: { color: 'white' },
        grid: { color: '#333' },
      },
      x: {
        ticks: { color: 'white' },
        grid: { display: false },
      },
    },
    plugins: {
      legend: { display: false }
    }
  };

  return (
    <div className="bg-gray-900 p-5 rounded-lg mt-5">
      <h2 className="text-white mb-3">Overview</h2>
      <Bar data={data} options={options} />
    </div>
  );
}
