import Image from "next/image";

//moment
import moment from "moment";
import { Date } from "./utility/Date";

// data fetching
export async function getData() {
  const res = await fetch("https://agency.teamrabbil.com/api/FeaturedProject");
  if (!res.ok) {
    throw new Error("Data fetching failed!");
  }

  return res.json();
}

async function FeatureProject() {
  const data = await getData();

  // big image is last object in fetching array
  const singleObj = data[data.length - 1];

  return (
    <div className="w-[95%] md:w-[90%] mx-auto">
      <div>
        <p className="text-md text-green">FEATURED PROJECT</p>
        <p className="text-xl font-bold w-[80%] sm:w-[50%] md:w-[30%]">
          We Provide the Perfect solution to your business growth
        </p>
        <br />
        <br />
        <div className=" md:flex space-y-6 md:space-y-0">
          <div className="v_sm:w-[90%] lg:w-[50%]  md:h-[500px] lg:h-[450px] v_lg:h-[550px] flex-col justify-evenly">
            <div className=" w-[90%] md:h-[80%] h-[60%] ">
              <Image
                src={singleObj["image"]}
                width={650}
                height={700}
                className="rounded-2xl"
                alt="feature project image"
              />
            </div>
            <div>
              <div className="flex space-x-2">
                <p>{singleObj["remark"]}</p>
                <p>{Date(singleObj["created_at"])}</p>
              </div>
              <p className="text-lg font-semibold">{singleObj["title"]}</p>
            </div>
          </div>

          <div className="v_sm:w-[90%] lg:w-[50%]  md:h-[550px] v_sm:space-y-10 md:space-y-1  md:space-x-1 sm:flex sm:flex-wrap ">
            {/* card  */}
            <div className=" md:w-[45%] space-y-1 md:space-y-1">
              <Image
                src={data[0]["image"]}
                width={250}
                height={80}
                className="rounded-lg"
                alt="feature project image"
              />
              <div className="flex space-x-2">
                <p className="text-[12px]">{data[0].remark}</p>
                <p className="text-[12px]">{Date(data[0]["created_at"])}</p>
              </div>
              <p className="text-md md:text-lg font-semibold">
                {data[0]["title"]}
              </p>
            </div>
            <div className=" md:w-[45%] h-[200px] space-y-1 md:space-y-2 p-0 m-0">
              <Image
                src={data[0]["image"]}
                width={250}
                height={80}
                className="rounded-lg"
                alt="feature project image"
              />
              <div className="flex space-x-2">
                <p className="text-[12px]">{data[0].remark}</p>
                <p className="text-[12px]">{Date(data[0]["created_at"])}</p>
              </div>
              <p className=" md:text-lg font-semibold">{data[0]["title"]}</p>
            </div>
            <div className=" md:w-[45%] h-[200px] space-y-1 md:space-y-2 p-0 m-0">
              <Image
                src={data[0]["image"]}
                width={250}
                height={80}
                className="rounded-lg"
                alt="feature project image"
              />
              <div className="flex space-x-2">
                <p className="text-[12px]">{data[0].remark}</p>
                <p className="text-[12px]">{Date(data[0]["created_at"])}</p>
              </div>
              <p className=" md:text-lg font-semibold">{data[0]["title"]}</p>
            </div>
            <div className=" md:w-[45%] h-[200px] space-y-1 md:space-y-2 p-0 m-0">
              <Image
                src={data[0]["image"]}
                width={250}
                height={80}
                className="rounded-lg"
                alt="feature project image"
              />
              <div className="flex space-x-2">
                <p className="text-[12px]">{data[0].remark}</p>
                <p className="text-[12px]">{Date(data[0]["created_at"])}</p>
              </div>
              <p className=" md:text-lg font-semibold">{data[0]["title"]}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureProject;
