import React, { useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [addBusiness, setAddBusiness] = useState(false);
  const nodeRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const toggleDropdown2 = () => {
    setIsOpen2(!isOpen2);
    setAddBusiness(false);
  };
  const SubBusinessDropdown = () => {
    if (!isOpen2) {
      return null;
    }
    return (
      <div
        id="dropdown2"
        className="absolute mt-2 bg-white  divide-y  rounded-[8px] divide-gray-100 shadow z-15 w-44 right-1 sm:right-[15.9rem] top-[1rem]"
      >
        <ul
          className="py-2 text-sm text-[#101828] rounded-[8px] w-[253px] bg-white"
          aria-labelledby="dropdownDefaultButton"
        >
          {addBusiness && (
            <>
              <hr />
              <li className="flex items-center justify-center py-2">
                <svg
                  width="34"
                  height="34"
                  viewBox="0 0 34 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.425"
                    y="0.425"
                    width="33.15"
                    height="33.15"
                    rx="16.575"
                    stroke="#D9CDFF"
                    stroke-width="0.85"
                  />
                </svg>
                <div className="pl-4 w-[143px]">Dunder Mifflin Co.</div>
              </li>
              <hr />
              <li className="flex items-center justify-center py-2">
                <svg
                  width="34"
                  height="34"
                  viewBox="0 0 34 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.425"
                    y="0.425"
                    width="33.15"
                    height="33.15"
                    rx="16.575"
                    stroke="#D9CDFF"
                    stroke-width="0.85"
                  />
                </svg>
                <div className="pl-4 w-[143px]">Dunder Mifflin Co.</div>
              </li>
            </>
          )}
          <hr />
          <li className="p-4">
            <button className="w-full h-[40px] border border-[#D9CDFF] text-[#5E01D6] bg-[#fff] flex justify-center items-center px-5 rounded-[6px] font-medium">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 10.625H5C4.65833 10.625 4.375 10.3417 4.375 10C4.375 9.65833 4.65833 9.375 5 9.375H15C15.3417 9.375 15.625 9.65833 15.625 10C15.625 10.3417 15.3417 10.625 15 10.625Z"
                  fill="#5E01D6"
                />
                <path
                  d="M10 15.625C9.65833 15.625 9.375 15.3417 9.375 15V5C9.375 4.65833 9.65833 4.375 10 4.375C10.3417 4.375 10.625 4.65833 10.625 5V15C10.625 15.3417 10.3417 15.625 10 15.625Z"
                  fill="#5E01D6"
                />
              </svg>
              <span
                className="flex ml-2 min-w-[fit-content]"
                onClick={() => {
                  setAddBusiness(true);
                }}
              >
                Add business
              </span>
            </button>
          </li>
        </ul>
      </div>
    );
  };
  return (
    <div className="rounded-[8px]">
      <span
        className="flex items-center cursor-pointer"
        onClick={toggleDropdown}
      >
        <span className="mx-2 font-[500] text-[#101828]">
          John Doe
        </span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.28 5.96667L8.93333 10.3133C8.42 10.8267 7.58 10.8267 7.06667 10.3133L2.72 5.96667"
            stroke="#292D32"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </span>
    </div>
  );
}

export default Dropdown;
