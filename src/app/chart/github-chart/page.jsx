"use client";

import axios from "axios";
import React, { useState, useEffect } from "react";
import { useDebouncedCallback } from "use-debounce";

export default function GitChartPage() {
  // State for storing the username
  const [username, setUsername] = useState(() => {
    return "";
  });

  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        const response = await axios.get(
          `https://api.github.com/users/${username}/repos`
        );
        setRepositories(response.data);
      } catch (error) {
        console.error("Error fetching repositories:", error);
      }
    };

    fetchRepositories();
  }, [username]);

  // Debounced callback function for handling input changes
  const handleChange = useDebouncedCallback((e) => {
    setUsername(e.target.value);
  }, 400); // Debounce delay of 400ms

  return (
    <>
      {/* Main content */}
      <div className="flex min-h-48 flex-col items-center justify-center px-4 md:px-8 xl:px-10">
        {/* Card container */}
        <div className=" bg-black rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-slate-800 flex flex-col justify-center p-11 hover:bg-opacity-25 shadow-xl shadow-blue-700 hover:shadow-blue-500 ">
          {/* Input field */}
          <input
            type="text"
            placeholder="Enter your GitHub username"
            onChange={(e) => handleChange(e)}
            className="text-white bg-blue-950 rounded-md p-2 focus:outline-none active:bg-blue-700 mx-auto"
          />
          {/* Display GitHub chart if username is provided */}
          {username.length !== 0 && (
            <div className="mt-10 flex justify-center">
              <img
                width="1050"
                src={`https://ghchart.rshah.org/${username}`}
                alt="github chart"
              />
            </div>
          )}
          <ul>
            {repositories.map((repo) => (
              <li key={repo.id}>
                <a href={repo.html_url}>{repo.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
