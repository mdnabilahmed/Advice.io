import React from "react";
import Navbar from "/Advice/frontend/src/components/Navbar";

const App = () => {
  return (
    <div className="bg-gradient-to-br from-[#f0f4ff] via-[#fcece4] to-[#e0f7fa] min-h-screen">
      <Navbar />
      <div className="pt-45 flex flex-col justify-center items-center">
        <div className=" text-5xl font-bold text-center">
          Real people. Real-time advice. Or just let AI handle it <br />{" "}
          <span className="text-violet-600">— your call.</span>
        </div>
        <p className="text-center pt-4">
          Get the advice you need — fast. Whether it comes from a person or AI,
          what matters is that it makes sense, saves time, <br /> and helps you
          move forward confidently.
        </p>
        <div className="pt-4 text-white">
          <button className=" p-3 bg-pink-700 rounded-xl">
            Start asking now
          </button>
          <button className=" p-3 ml-2 bg-pink-700 rounded-xl">
            Watch demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
