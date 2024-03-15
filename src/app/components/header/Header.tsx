import Link from "next/link";

const Header = () => {
  return (
    <header className="text-white body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          href="/"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <span className="text-white text-xl">Home</span>
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link className="mr-5" href="/chart/barchart">
            Bar Chart
          </Link>
          <Link className="mr-5" href="/chart/piechart">
            Pie Chart
          </Link>
          <Link className="mr-5" href="/chart/radarchart">
            Radar Chart
          </Link>
          <Link className="mr-5" href="/chart/donut">
            Donut
          </Link>
          <Link className="mr-5" href="/chart/dotlinechart">
            Dot Line Chart
          </Link>
          <Link className="mr-5" href="/chart/skills">
            Skills
          </Link>
          <Link className="mr-5" href="/chart/bubblechart">
            Bubble Chart
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
