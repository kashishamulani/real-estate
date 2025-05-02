

import StatsCard from "./components/StatsCard";
import OverviewChart from "./components/OverviewChart";
import RecentSales from "./components/RecentSales";
import Sidebar from "./components/sidebar";

export default function Dashboard() {
  return (
    <div className="flex">
      <Sidebar/>
      <div className="flex-1 bg-black min-h-screen">
        
        <div className="p-5 grid grid-cols-1 md:grid-cols-4 gap-5">
          <StatsCard title="Total Revenue" value="$45,231.89" change="+20.1% from last month" />
          <StatsCard title="Subscriptions" value="+2350" change="+180.1% from last month" />
          <StatsCard title="Sales" value="+12,234" change="+19% from last month" />
          <StatsCard title="Active Now" value="+573" change="+201 since last hour" />
        </div>
        <div className="p-5 grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="md:col-span-2">
            <OverviewChart />
          </div>
          <RecentSales />
        </div>
      </div>
    </div>
  );
}
