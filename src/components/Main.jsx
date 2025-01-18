import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <main className="text-center mt-16">
      <p className="text-6xl font-semibold text-[#002834]">
        Solve problem with an
        <br />
        integrated agency.
      </p>
      <p className="text-[#7D82A1] py-8">
        Ehya is the Instagram analytics platform teams use to stay focused on
        the goals, track
        <br />
        engagement for report your business .
      </p>
      <div className="flex justify-center gap-12 items-center font-semibold">
        <Link
          to="/"
          className="bg-[#0075FF] text-white px-12 py-4 rounded-bl-full rounded-r-full hover:text-[#0075FF] hover:border hover:border-[#AEC7E4] hover:bg-white
          transition-color duration-500"
        >
          See our portfolio
        </Link>
        <Link
          to="/"
          className="px-12 py-4 text-[#0075FF] border border-[#AEC7E4] rounded-bl-full rounded-r-full hover:text-white hover:none hover:bg-[#0075FF]
          transition-color duration-500"
        >
          More Info
        </Link>
      </div>
    </main>
  );
};

export default Main;
