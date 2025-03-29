const RecentTransactions = ({ item }: any) => {
  return (
    <div className="w-[49%] min-w-full sm:p-8 p-4 sm:min-w-[49%]  p-[1rem] pt-6 sm:pt-10  border-[.5] border-[#E7E9FB] rounded-[15px] bg-white">
      <div className="flex justify-between font-medium">
        <span className="text-[#667085]">Recent transactions</span>{" "}
        <span className="bg-[#F2F4F7] leading-[20px] text-[#344054] px-4 py-2 flex items-center rounded-[5px]">
          <span className="flex mr-1">
            Print <span className="hidden ml-1 sm:block">statement</span>{" "}
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
      <div className="carditem">
        <div className="flex items-center mt-7 sm:mt-5">
          <span className="mr-2 text-[#98A2B3] font-semibold text-[14px]">
            Today
          </span>{" "}
          <hr className="w-full " />
        </div>
        <div className="flex items-center justify-between mt-2">
          <div className="text-[14px]">
            <div className="text-[#101828] font-medium ">To Emina Odette</div>
            <div className="text-[#475467]">
              7:18 AM •
              <span className="text-[#E4B200] text-[14px]"> Pending</span>
            </div>
          </div>
          <div className="">
            <div className="font-[700] text-[#344054] text-[16px]">
              - ₦ 10,000.00
            </div>
            <div className="text-[#667085] text-right text-[14px]">
              ₦ 4,350,000.20
            </div>
          </div>
        </div>
      </div>
      <div className="carditem">
        <div className="flex items-center mt-7 sm:mt-5">
          <span className="mr-2 text-[#98A2B3] font-semibold text-[14px]">
            Yesterday
          </span>{" "}
          <hr className="w-full " />
        </div>
        <div className="flex items-center justify-between mt-2">
          <div className="text-[14px]">
            <div className="text-[#101828] font-medium ">To Emina Odette</div>
            <div className="text-[#475467]">
              7:18 AM •
              <span className="text-[#039855] text-[14px]"> Completed</span>
            </div>
          </div>
          <div className="">
            <div className="font-[700] text-[#F73C3C] text-[16px]">
              - ₦ 65,000.00
            </div>
            <div className="text-[#667085] text-right text-[14px]">
              ₦ 4,350,000.20
            </div>
          </div>
        </div>
      </div>
      <div className="carditem">
        <div className="flex items-center mt-7 sm:mt-5">
          <div className="mr-2 text-[#98A2B3] min-w-[fit-content]  font-semibold text-[14px]">
            Fri 19 Jul
          </div>{" "}
          <hr className="w-full " />
        </div>
        <div className="flex items-center justify-between mt-2">
          <div className="text-[14px]">
            <div className="text-[#101828] font-medium ">
              To Bass Industries
            </div>
            <div className="text-[#475467]">
              7:18 AM •
              <span className="text-[#F73C3C] text-[14px]"> Failed</span>
            </div>
          </div>
          <div className="">
            <div className="font-[700] text-[#344054] text-[16px]">
              - ₦ 65,000.00
            </div>
            <div className="text-[#667085] text-right text-[14px]">
              ₦ 4,350,000.20
            </div>
          </div>
        </div>
      </div>
      <div className="carditem">
        <div className="flex items-center mt-5">
          <hr className="w-full " />
        </div>
        <div className="flex items-center justify-between mt-4">
          <div className="text-[14px]">
            <div className="text-[#101828] font-medium ">
              From S&B Incorporated
            </div>
            <div className="text-[#475467]">7:18 AM</div>
          </div>
          <div className="">
            <div className="font-[700] text-[#11A811] text-[16px]">
              + ₦ 190,000.00
            </div>
            <div className="text-[#667085] text-right text-[14px]">
              ₦ 4,350,000.20
            </div>
          </div>
        </div>
      </div>
      <div className="carditem">
        <div className="flex items-center mt-5">
          <hr className="w-full " />
        </div>
        <div className="flex items-center justify-between mt-4">
          <div className="text-[14px]">
            <div className="text-[#101828] font-medium ">To Humphrey & Co.</div>
            <div className="text-[#475467]">
              7:18 AM •
              <span className="text-[#039855] text-[14px]"> Completed</span>
            </div>
          </div>
          <div className="">
            <div className="font-[700] text-[#F73C3C] text-[16px]">
              - ₦ 30,000.00
            </div>
            <div className="text-[#667085] text-right text-[14px]">
              ₦ 4,350,000.20
            </div>
          </div>
        </div>
      </div>
      <div className="text-[#7D14FF] text-[14px] text-center mt-8 cursor-pointer">
        View full transaction history
      </div>
    </div>
  );
};

export default RecentTransactions;
