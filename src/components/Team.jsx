// icon
import { FaFacebookF, FaTwitter } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";

import Link from "next/link";

// data fetching
export async function getData() {
  const res = await fetch("https://agency.teamrabbil.com/api/TeamList");
  if (!res.ok) {
    throw new Error("Data fetching failed!");
  }

  return res.json();
}

async function Team() {
  const data = await getData();

  return (
    <div>
      <div>
        <div className="w-[90%] mt-5 mx-auto ">
          <p className="text-md text-green font-semibold"> Our Team Member</p>
          <p className="text-xl font-bold w-[80%] sm:w-[50%] md:w-[30%]">
            Check our aswesome team member
          </p>
          <br />
        </div>
        <div className=" flex flex-wrap sm:justify-around items-center space-y-10 md:space-y-5">

          <div className="relative flex flex-col mx-auto v_sm:w-[90%] sm:w-[392px] v_sm:h-[350px] sm:h-[450px] rounded-bl-xl rounded-br-xl rounded-tl-xl rounded-tr-xl border-2 shadow-2xl space-y-2 group">
            <img
              src={data[0]["image"]}
              alt="Picture of the hero"
              className="w-[100%] h-[80%] rounded-tl-xl rounded-tr-xl"
            />
            <p className="text-lg text-center font-bold !mt-5">
              {data[0]["name"]}
            </p>
            {/* hover section  */}
            <div className="absolute hidden transition delay-300 group-hover:flex w-[200px] h-16 bg-white rounded-full top-[40%] sm:top-[60%] left-[15%] sm:left-[25%] justify-around items-center">
              <Link
                href={data[0]["facebook"]}
                className=" hover:text-blue-400 transition delay-100 cursor-pointer  text-xl text-slate-300 "
              >
                <FaFacebookF />
              </Link>
              |
              <Link
                href={data[0]["twitter"]}
                className="hover:text-blue-400  transition delay-100 cursor-pointer text-xl text-slate-300"
              >
                <FaTwitter />
              </Link>
              |
              <Link
                href={data[0]["instagram"]}
                className=" hover:text-pink-500 transition delay-100 cursor-pointer text-xl text-slate-300"
              >
                <FiInstagram />
              </Link>
            </div>
          </div>
          <div className="relative flex flex-col mx-auto v_sm:w-[90%] sm:w-[392px] v_sm:h-[350px] sm:h-[450px] rounded-bl-xl rounded-br-xl rounded-tl-xl rounded-tr-xl border-2 shadow-2xl space-y-2 group">
            <img
              src={data[1]["image"]}
              alt="Picture of the hero"
              className="w-[100%] h-[80%] rounded-tl-xl rounded-tr-xl"
            />
            <p className="text-lg text-center font-bold !mt-5">
              {data[1]["name"]}
            </p>
            {/* hover section  */}
            <div className="absolute hidden transition transform-cpu delay-300 group-hover:flex w-[200px] h-16 bg-white rounded-full top-[60%] left-[25%] justify-around items-center">
              <Link
                href={data[1]["facebook"]}
                className=" hover:text-blue-400 transition delay-100 cursor-pointer  text-xl text-slate-300 "
              >
                <FaFacebookF />
              </Link>
              |
              <Link
                href={data[1]["twitter"]}
                className="hover:text-blue-400  transition delay-100 cursor-pointer text-xl text-slate-300"
              >
                <FaTwitter />
              </Link>
              |
              <Link
                href={data[1]["instagram"]}
                className=" hover:text-pink-500 transition delay-100 cursor-pointer text-xl text-slate-300"
              >
                <FiInstagram />
              </Link>
            </div>
          </div>
          <div className="relative flex flex-col mx-auto v_sm:w-[90%] sm:w-[392px] v_sm:h-[350px] sm:h-[450px] rounded-bl-xl rounded-br-xl rounded-tl-xl rounded-tr-xl border-2 shadow-2xl space-y-2 group">
            <img
              src={data[2]["image"]}
              alt="Picture of the hero"
              className="w-[100%] h-[80%] rounded-tl-xl rounded-tr-xl"
            />
            <p className="text-lg text-center font-bold !mt-5">
              {data[2]["name"]}
            </p>
            {/* hover section  */}
            <div className="absolute hidden transition transform-cpu delay-300 group-hover:flex w-[200px] h-16 bg-white rounded-full top-[60%] left-[25%] justify-around items-center">
              <Link
                href={data[2]["facebook"]}
                className=" hover:text-blue-400 transition delay-100 cursor-pointer  text-xl text-slate-300 "
              >
                <FaFacebookF />
              </Link>
              |
              <Link
                href={data[2]["twitter"]}
                className="hover:text-blue-400  transition delay-100 cursor-pointer text-xl text-slate-300"
              >
                <FaTwitter />
              </Link>
              |
              <Link
                href={data[2]["instagram"]}
                className=" hover:text-pink-500 transition delay-100 cursor-pointer text-xl text-slate-300"
              >
                <FiInstagram />
              </Link>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Team;
