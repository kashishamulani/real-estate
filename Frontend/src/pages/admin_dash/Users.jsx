// import StatsCard from "./components/StatsCard";
import UsersAll from "./components/UsersAll";
import Sidebar from "./components/sidebar";

export default function UserD() {
  return (
    <div className="flex">
      <Sidebar/>
      <div className="flex-1 bg-black min-h-screen">
        
        
        <div className=" w-full p-5 grid grid-cols-1 md:grid-cols-3 gap-5">
          <UsersAll/>
        </div>
      </div>
    </div>
  );
}
