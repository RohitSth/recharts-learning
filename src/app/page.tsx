import AreaChart from "./components/AreaChart";
import BarChart from "./components/BarChart";
import BarChart2 from "./components/BarChart2";
import LineChart from "./components/LineChart";

export default function Home() {
  return (
    <main className="flex min-h-96 flex-col items-center justify-center px-4 md:px-8 xl:px-10">
      <div className="grid xl:grid-cols-2 lg:grid-cols-2 w-full gap-10 max-w-[1400px]">
        <div className="h-full w-full flex-col items-center bg-black rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-slate-800 flex justify-center p-11 hover:bg-opacity-25">
          <AreaChart />
          <div className="flex justify-center">Area Chart</div>
        </div>

        <div className="h-full w-full flex-col items-center bg-black rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-slate-800 flex justify-center p-11 hover:bg-opacity-25">
          <BarChart />
          <div className="flex justify-center">Double Bar Chart</div>
        </div>

        <div className="h-full w-full flex-col items-center bg-black rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-slate-800 flex justify-center p-11 hover:bg-opacity-25">
          <LineChart />
          <div className="flex justify-center">Line Chart</div>
        </div>

        <div className="h-full w-full flex-col items-center bg-black rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-slate-800 flex justify-center p-11 hover:bg-opacity-25">
          <BarChart2 />
          <div className="flex justify-center">Single Bar Chart</div>
        </div>
      </div>
    </main>
  );
}

function GridItem({
  title,
  children,
}: {
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center justify-center p-4 bg-slate-900/50 border-slate-900">
      <h3 className="text-2xl font-semibold text-white mb-4">{title}</h3>
      {children}
    </div>
  );
}
