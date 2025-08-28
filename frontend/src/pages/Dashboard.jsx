import React, { useState } from "react";
import Navbar from "../components/Navbar";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import axios from "axios";

const Dashboard = () => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:3000/api/dashboard", {
        prompt,
      });
      setResponse(data.response);
    } catch (error) {
      console.error("Error generating response:", error);
    }
    // setResponse("");
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex">
        <div className="w-1/4 bg-red-200">Left Sidebar</div>

        <div className="w-2/4 bg-blue-100 flex flex-col justify-center items-center p-10">
          {response && (
            <div className="mt-10 p-6 bg-white rounded shadow w-full">
              <strong>Response:</strong> {response}
            </div>
          )}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center gap-8 w-full"
          >
            <input
              onChange={(e) => setPrompt(e.target.value)}
              type="text"
              value={prompt}
              placeholder="Ask me anything..."
              className="py-3 px-6 w-full border border-red-500 rounded"
            />

            <button
              type="submit"
              className="bg-blue-600 py-3 px-6 rounded text-white font-semibold flex items-center gap-2 hover:bg-blue-700 active:scale-95"
            >
              <SendRoundedIcon />
              Send
            </button>
          </form>
        </div>
        <div className="w-1/4 bg-green-200">Right Sidebar</div>
      </div>
    </>
  );
};

export default Dashboard;
