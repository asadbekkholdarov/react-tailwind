import React from "react";
function Analytics() {
  return (
    <div>
      <div className="w-full bg-white py-16 px-4">
        <div className="mx-auto max-w-[1240px] grid md:grid-cols-2">
          <img
            src="https://raw.githubusercontent.com/fireclint/data-finance-react-tailwind/main/src/assets/laptop.jpg"
            alt=""
            className="w-[500px] mx-auto my-4"
          />
          <div className="flex flex-col justify-center ">
            <p className="text-[#00df9a] font-bold">DATA ANALYTICS DASHBOARD</p>
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold">Manage Data Analtics Center</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              doloribus debitis quaerat ipsa molestiae reprehenderit repellendus
              unde illo. Consequuntur repellendus atque earum nesciunt ducimus
              debitis perspiciatis? Autem, magnam consectetur. Earum.
            </p>

            <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
