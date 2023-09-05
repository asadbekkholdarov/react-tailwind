import React from "react";
import Typed from "react-typed";
function Hero() {
  return (
    <div id="about" className="text-white">
      <div className="max-w-[800px]  mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00df9a] font-bold p-2">
          GROWING WITH DATA ANALYTICS
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Growing with data
        </h1>
        <div>
          <p className="md:text-5xl sm:text-4xl text-xl font-bold">
            Flex, Flexiable, Financing for{" "}
            <Typed
              className="md:text-5xl sm:text-4xl text-xl"
              strings={["BTC", "BTB", "SASS"]}
              typeSpeed={120}
              backSpeed={140}
              loop
            />{" "}
          </p>
        </div>
        <p className="md:text-2xl text-gray-500 font-bold text-xl mt-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero facere delectus soluta dolorum eveniet vel? Totam, nostrum aperiam?</p>
        <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3">Get Started</button>
      </div>
    </div>
  );
}

export default Hero;
