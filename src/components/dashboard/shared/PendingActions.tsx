import React, { useEffect, useState } from "react";
import axios from "axios";

interface Post {
  id: number;
  title: string;
  body: string;
}

const PendingActions: React.FC = () => {
  const [data, setData] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get<Post[]>("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setData(response.data.slice(0, 4)); // Display first 4 items
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch data");
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="w-[49%] sm:min-w-[49%] min-w-full h-[fit-content] sm:p-8 p-4 pt-6 sm:pt-10 border-[.5] border-[#E7E9FB] rounded-[15px] bg-white mt-8 sm:mt-0">
      <div className="flex justify-between font-semibold">
        <span className="text-[#667085] flex items-center">
          Pending actions
          <span className="ml-1 flex items-center justify-center w-[24px] h-[24px] rounded-[50%] bg-[#EAECF0] text-[#344054]">
            {data.length}
          </span>
        </span>
        <span className="flex text-[#667085] items-center">
          Filter
          <span className="bg-[#F2F4F7] ml-2 h-[36px] leading-[20px] text-[#344054] px-4 py-2 flex items-center rounded-[5px] font-semibold">
            <span className="mr-1">All </span>
          </span>
        </span>
      </div>
      {data.map((item) => (
        <div className="carditem" key={item.id}>
          <div className="flex items-center mt-5">
            <span className="mr-2 text-[#98A2B3] font-semibold text-[14px]">
              Today
            </span>
            <hr className="w-full" />
          </div>
          <div className="flex flex-wrap items-center justify-between mt-2 sm:flex-nowrap">
            <div className="text-[14px] w-full sm:w-[fit-content]">
              <div className="text-[#101828] font-[400] ">{item.title}</div>
              <div className="text-[#475467] text-[14px]">{item.body}</div>
            </div>
            <div className="font-[500] text-[#7D14FF] text-[14px] mt-2 sm:mt-0">
              Review offer
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PendingActions;
