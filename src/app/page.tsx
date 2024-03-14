import AreaChart from "./components/AreaChart";
import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";
import PieChart from "./components/PieChart";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 md:px-8 xl:px-10">
      <div className="grid xl:grid-cols-3 lg:grid-cols-2 w-full gap-10 max-w-[1400px]">
        <GridItem title="Area Chart">
          <AreaChart />
        </GridItem>

        <GridItem title="Bar Chart">
          <BarChart />
        </GridItem>

        <GridItem title="Line Chart">
          <LineChart />
        </GridItem>

        <GridItem title="Pie Chart">
          <PieChart />
        </GridItem>
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
