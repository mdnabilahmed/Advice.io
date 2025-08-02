import React from "react";
import Navbar from "/Advice/frontend/src/components/Navbar";
import Footer from "/Advice/frontend/src/components/Footer";

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
      <div className="pt-80">
        <div className=" pt-30 flex items-center justify-center flex-col">
          <h1 className="text-3xl font-bold text-center">
            Human Empathy Meets AI Precision Just Ask
          </h1>
          <p class="text-gray-600 font-thin text-center pt-4">
            Choose between real people or advanced AI to receive honest, <br />
            thoughtful advice tailored to your needs.
          </p>
        </div>
        <div className="py-20">
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8 px-4">
            {/* Card 1 */}
            <div className=" w-full rounded-2xl shadow-lg bg-white p-10 transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="w-16 h-16 flex items-center justify-center bg-blue-100 text-blue-600 rounded-xl text-3xl mb-8">
                📝
              </div>
              <h3 className="text-2xl font-semibold mb-4">
                Want to ask about Law?
              </h3>
              <p className="text-gray-500 text-base font-light leading-relaxed">
                Generate high-quality, engaging articles on any topic with our
                AI writing technology.
              </p>
            </div>

            {/* Card 2 */}
            <div className="w-full rounded-2xl shadow-lg bg-white p-10 transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="w-16 h-16 flex items-center justify-center bg-pink-100 text-pink-600 rounded-xl text-3xl mb-8">
                #
              </div>
              <h3 className="text-2xl font-semibold mb-4">
                Blog Title Generator
              </h3>
              <p className="text-gray-500 text-base font-light leading-relaxed">
                Find the perfect, catchy title for your blog posts with our
                AI-powered generator.
              </p>
            </div>

            {/* Card 3 */}
            <div className="w-full rounded-2xl shadow-lg bg-white p-10 transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="w-16 h-16 flex items-center justify-center bg-green-100 text-green-600 rounded-xl text-3xl mb-8">
                🖼️
              </div>
              <h3 className="text-2xl font-semibold mb-4">
                AI Image Generation
              </h3>
              <p className="text-gray-500 text-base font-light leading-relaxed">
                Create stunning visuals with our AI image generation tool.
                Experience the power of AI.
              </p>
            </div>

            {/* Placeholder 1 */}
            <div className="w-full h-[240px] rounded-2xl shadow-md bg-white flex items-center justify-center text-gray-400 text-lg font-medium">
              Yet to add something
            </div>

            {/* Placeholder 2 */}
            <div className="w-full h-[240px] rounded-2xl shadow-md bg-white flex items-center justify-center text-gray-400 text-lg font-medium">
              Yet to add something
            </div>

            {/* Placeholder 3 */}
            <div className="w-full h-[240px] rounded-2xl shadow-md bg-white flex items-center justify-center text-gray-400 text-lg font-medium">
              Yet to add something
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
