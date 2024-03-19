import AreaChart from "./components/AreaChart";
import BarChart from "./components/BarChart";
import BarChart2 from "./components/BarChart2";
import LineChart from "./components/LineChart";

export default function Home() {
  return (
    <main className="flex min-h-96 flex-col items-center justify-center px-4 md:px-8 xl:px-10">
      <div className="grid xl:grid-cols-2 lg:grid-cols-2 w-full gap-10 max-w-[1400px]">
        <div className="h-full w-full flex-col items-center bg-black rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-blue-800 flex justify-center p-11 hover:bg-opacity-25 shadow-xl shadow-blue-700 hover:shadow-blue-500">
          <AreaChart />
          <div className="flex justify-center">Area Chart</div>
        </div>

        <div className="h-full w-full flex-col items-center bg-black rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-blue-800 flex justify-center p-11 hover:bg-opacity-25 shadow-xl shadow-blue-700 hover:shadow-blue-500">
          <BarChart />
          <div className="flex justify-center">Double Bar Chart</div>
        </div>

        <div className="h-full w-full flex-col items-center bg-black rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-blue-800 flex justify-center p-11 hover:bg-opacity-25 shadow-xl shadow-blue-700 hover:shadow-blue-500">
          <LineChart />
          <div className="flex justify-center">Line Chart</div>
        </div>

        <div className="h-full w-full flex-col items-center bg-black rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-blue-800 flex justify-center p-11 hover:bg-opacity-25 shadow-xl shadow-blue-700 hover:shadow-blue-500">
          <BarChart2 />
          <div className="flex justify-center">Single Bar Chart</div>
        </div>
      </div>
    </main>
  );
}
