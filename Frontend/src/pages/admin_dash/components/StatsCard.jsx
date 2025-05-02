export default function StatsCard({ title, value, change }) {
    return (
      <div className="bg-gray-900 p-5 rounded-lg text-white">
        <h2 className="text-sm">{title}</h2>
        <p className="text-2xl font-bold">{value}</p>
        <p className="text-green-400 text-xs">{change}</p>
      </div>
    );
  }
  