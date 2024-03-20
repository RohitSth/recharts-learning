"use client";

import { log } from "console";
import React, { useState, useEffect, use } from "react";

const Page = () => {
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const query = await fetch("https://jsonplaceholder.typicode.com/users");
      const response = await query.json();
      console.log(response);

      setUserInfo(response);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="flex min-h-48 flex-col items-center justify-center px-4 md:px-8 xl:px-10">
        <div className=" bg-black rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-slate-800 flex flex-col justify-center p-11 hover:bg-opacity-25 shadow-xl shadow-blue-700 hover:shadow-blue-500">
          {userInfo &&
            userInfo.length &&
            userInfo.map((user: any) => {
              return (
                <>
                  <h4>{user.name}</h4>
                </>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Page;
