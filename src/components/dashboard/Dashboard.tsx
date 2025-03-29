import React from "react";
import Nav from "./shared/Navbar";
import ItemCard from "./shared/Cards";
import TaskRecords from "./shared/TaskRecords";
import IntroSection from "./shared/IntroSection";

const Dashboard = () => {
  const items = [
    { title: "Item 1", amount: 5000, phone: "08012345678" },
    { title: "Item 2", amount: 7500, phone: "08123456789" },
    { title: "Item 3", amount: 6200, phone: "09098765432" },
    { title: "Item 4", amount: 7200, phone: "09098765432" },
  ];
  return (
    <>
      <Nav />
      <div className="bg-[#F9FAFB]">
        <div className="sm:w-[90%] w-full m-auto pb-8 sm:py-8">
          <IntroSection />
          <div className=" flex-wrap justify-between hidden md:flex">
            {items.map((item, index) => (
              <ItemCard
                key={index}
                item={item}
                className="w-[calc(50%-8px)] sm:w-auto"
              />
            ))}
          </div>
          <div className="flex text-[14px] sm:hidden mt-[.5rem] sm:mt-6 p-[1rem] sm:p-0 sm:justify-start justify-center ">
            <button className="w-[153px] h-[40px] mr-2 border-none text-[#5E01D6] hover:bg-[#D7CEFB] bg-[#D7CEFB] flex items-center px-5 rounded-[6px] font-semibold">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.85 18.025C10.8667 18.025 9.475 17.3333 8.375 14.025L7.775 12.225L5.975 11.625C2.675 10.525 1.98334 9.13333 1.98334 8.15C1.98334 7.175 2.675 5.775 5.975 4.66667L13.05 2.30833C14.8167 1.71666 16.2917 1.89166 17.2 2.79166C18.1083 3.69166 18.2833 5.175 17.6917 6.94167L15.3333 14.0167C14.225 17.3333 12.8333 18.025 11.85 18.025ZM6.36667 5.85833C4.05 6.63333 3.225 7.55 3.225 8.15C3.225 8.75 4.05 9.66667 6.36667 10.4333L8.46667 11.1333C8.65 11.1917 8.8 11.3417 8.85834 11.525L9.55834 13.625C10.325 15.9417 11.25 16.7667 11.85 16.7667C12.45 16.7667 13.3667 15.9417 14.1417 13.625L16.5 6.55C16.925 5.26667 16.85 4.21667 16.3083 3.675C15.7667 3.13333 14.7167 3.06667 13.4417 3.49167L6.36667 5.85833Z"
                  fill="#5E01D6"
                />
                <path
                  d="M8.42499 12C8.26666 12 8.10833 11.9417 7.98333 11.8167C7.74166 11.575 7.74166 11.175 7.98333 10.9334L10.9667 7.94169C11.2083 7.70002 11.6083 7.70002 11.85 7.94169C12.0917 8.18335 12.0917 8.58335 11.85 8.82502L8.86666 11.8167C8.75 11.9417 8.58333 12 8.42499 12Z"
                  fill="#5E01D6"
                />
              </svg>
              <span className="ml-2">Send money</span>
            </button>
          </div>
          <div className="flex flex-wrap justify-between mt-5 mb-3 sm:flex-nowrap sm:mb-0">
            {/* Focus of the test */}
            <TaskRecords />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
