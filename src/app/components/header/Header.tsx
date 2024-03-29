import Link from "next/link";

const Header = () => {
  return (
    <header className="text-white body-font">
      <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center">
        <Link
          href="/"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <span className="text-white text-xl hover:text-blue-400">Home</span>
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link className="mr-5 hover:text-blue-400" href="/chart/barchart">
            Bar Chart
          </Link>
          {/* <Link className="mr-5 hover:text-blue-400" href="/chart/piechart">
            Pie Chart
          </Link> */}
          <Link className="mr-5 hover:text-blue-400" href="/chart/radarchart">
            Radar Chart
          </Link>
          <Link className="mr-5 hover:text-blue-400" href="/chart/donut">
            Donut Chart
          </Link>
          {/* <Link className="mr-5 hover:text-blue-400" href="/chart/dotlinechart">
            Dot Line Chart
          </Link> */}
          <Link className="mr-5 hover:text-blue-400" href="/chart/skills">
            Skills Chart
          </Link>
          <Link className="mr-5 hover:text-blue-400" href="/chart/bubblechart">
            Bubble Chart
          </Link>
          <Link className="mr-5 hover:text-blue-400" href="/chart/linechart">
            Line Chart
          </Link>
          <Link className="mr-5 hover:text-blue-400" href="/chart/gaugechart">
            Gauge Chart
          </Link>
          <Link
            className="mr-5 hover:text-blue-400"
            href="/chart/testing-gauge"
          >
            TestGauge Chart
          </Link>
          <Link className="mr-5 hover:text-blue-400" href="/chart/github-chart">
            GitHub Chart
          </Link>
          <Link className="mr-5 hover:text-blue-400" href="/chart/piechart">
            Pie Chart
          </Link>
          <Link className="mr-5 hover:text-blue-400" href="/chart/scatterchart">
            ScatterChart
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
