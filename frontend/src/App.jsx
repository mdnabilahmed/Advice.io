import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <div className=" bg-gradient-to-br from-[#f0f4ff] via-[#fce4ec] to-[#e0f7fa]">
        <Navbar />
        <div className="h-screen flex flex-col justify-center items-center text-xl font-bold text-center">
          Real people. Real-time advice. Or just let AI handle it <br /> — your
          call.
        </div>
      </div>
    </div>
  );
};
//bemari bhi battana hai na aapko
// gimme 2 mins installed nhi hai, okay
export default App;
