

const ItemCard = ({ item }:any) => {
  return (
    <div className="min-w-[321px] md:min-w-[24%] bg-white rounded-[10px] shadow-md">
      <div className="p-4 sm:p-7 border border-[#F4F0FF] rounded-lg">
        <div className="font-medium text-lg">{item.title}</div>
        <div className="text-[32px] mt-2 font-semibold">
          <span className="text-[#667085] text-[24px] mr-1">₦</span>
          {item.amount}
          <span className="text-[#667085] text-[24px] ml-1">.20</span>
        </div>
        <div className="flex items-center mt-2 text-[16px] text-gray-700">
          <span className="mr-1">{item.phone}</span>
          <svg
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="cursor-pointer text-blue-600 hover:text-blue-800"
          >
            <path
              d="M10.6666 9.10001V11.9C10.6666 14.2333 9.73331 15.1667 7.39998 15.1667H4.59998C2.26665 15.1667 1.33331 14.2333 1.33331 11.9V9.10001C1.33331 6.76668 2.26665 5.83334 4.59998 5.83334H7.39998C9.73331 5.83334 10.6666 6.76668 10.6666 9.10001Z"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;