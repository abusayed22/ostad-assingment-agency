// icon
import { MdOutlineSportsSoccer } from "react-icons/md";

// data fetching
export async function getData() {
  const res = await fetch("https://agency.teamrabbil.com/api/StatList");
  if (!res.ok) {
    throw new Error("Data fetching failed!");
  }

  return res.json();
}

async function Stats() {
  const data = await getData();

  return (
    <div className="w-[95%] md:w-[90%] mx-auto md:h-[500px] flex items-center">
      <div className="md:flex space-y-2 md:justify-around w-[90%] mx-auto">
        <div className="v_sm:w-60 v_sm:h-64 sm:w-48 sm:h-56 md:w-[288px] md:h-[290px] shadow-xl rounded-lg flex flex-col justify-center items-center space-y-2 mx-auto">
          <div className="w-16 h-16 text-xl md:w-20 md:h-20 bg-lemon rounded-lg flex justify-center items-center">
            <MdOutlineSportsSoccer size={25} />
          </div>
          <p className="text-2xl font-bold">{data["followers"]}</p>
          <p className="font-semibold ">followers</p>
        </div>
        <div className="v_sm:w-60 v_sm:h-64 sm:w-48 sm:h-56 md:w-[288px] md:h-[290px] shadow-xl rounded-lg flex flex-col justify-center items-center space-y-2 mx-auto">
          <div className="w-16 h-16 text-xl md:w-20 md:h-20 bg-lemon rounded-lg flex justify-center items-center">
            <MdOutlineSportsSoccer size={25} />
          </div>
          <p className="text-2xl font-bold">{data["solved"]}</p>
          <p className="font-semibold ">solved</p>
        </div>
        <div className="v_sm:w-60 v_sm:h-64 sm:w-48 sm:h-56 md:w-[288px] md:h-[290px] shadow-xl rounded-lg flex flex-col justify-center items-center space-y-2 mx-auto">
          <div className="w-16 h-16 text-xl md:w-20 md:h-20 bg-lemon rounded-lg flex justify-center items-center">
            <MdOutlineSportsSoccer size={25} />
          </div>
          <p className="text-2xl font-bold">{data["customers"]}</p>
          <p className="font-semibold capitalize">customers</p>
        </div>
        <div className="v_sm:w-60 v_sm:h-64 sm:w-48 sm:h-56 md:w-[288px] md:h-[290px] shadow-xl rounded-lg flex flex-col justify-center items-center space-y-2 mx-auto">
          <div className="w-16 h-16 text-xl md:w-20 md:h-20 bg-lemon rounded-lg flex justify-center items-center">
            <MdOutlineSportsSoccer size={25} />
          </div>
          <p className="text-2xl font-bold">{data["projects"]}</p>
          <p className="font-semibold capitalize">projects</p>
        </div>
      </div>
    </div>
  );
}

export default Stats;
