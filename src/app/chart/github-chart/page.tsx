"use client";

import React, { useState } from "react";
import { useDebouncedCallback } from "use-debounce";

export default function GitChartPage() {
  const [username, setUsername] = useState(() => {
    return "";
  });

  const handleChange = useDebouncedCallback((e: any) => {
    setUsername(e.target.value);
  }, 400);

  return (
    <>
      <div className="flex min-h-48 flex-col items-center justify-center px-4 md:px-8 xl:px-10">
        <div className=" bg-black rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-slate-800 flex flex-col justify-center p-11 hover:bg-opacity-25 shadow-xl shadow-blue-700 hover:shadow-blue-500 ">
          <input
            type="text"
            placeholder="Enter your GitHub username"
            onChange={(e) => handleChange(e)}
            className="text-white bg-blue-950 rounded-md p-2 focus:outline-none active:bg-blue-700 mx-auto"
          />
          {username.length !== 0 && (
            <div className="mt-10 flex justify-center">
              <img
                width="1050"
                src={`https://ghchart.rshah.org/${username}`}
                alt="github chart"
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
