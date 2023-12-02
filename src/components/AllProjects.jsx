

// data fetching 
export async function getData() {
    const res = await fetch('https://agency.teamrabbil.com/api/AllProject')
    if (!res.ok) {
        throw new Error("Data fetching failed!")
    }

    return res.json()
}

async function AllProjects() {

    const data = await getData()

    return (
        <div>
            <div className="w-[90%] mt-5 md:w-[85%] mx-auto font-semibold">
                <div className="md:w-[85%] mx-auto">
                    <p className="text-md text-green">ALL PROJECT</p>
                    <p className="text-xl font-bold w-[80%] sm:w-[50%] md:w-[30%]">Better Agency/SEO Solution At Your Fingertips</p>
                </div>
                <br />
                <br />
                <div className="space-y-2">
                    <div className=" flex flex-wrap justify-around gap-y-5">
                        <div className="md:w-[540px] md:h-[511px] flex flex-col justify-center items-center shadow-md rounded-xl space-y-2">
                            <img src={data[0]['image']} alt="" className="w-[444px] h-[420px] rounded-xl" />
                            <p className="text-lg font-bold">{data[0]["title"]}</p>
                        </div>
                        <div className="md:w-[540px] md:h-[511px] flex flex-col justify-center items-center shadow-md rounded-xl space-y-2">
                            <img src={data[1]['image']} alt="" className="w-[444px] h-[420px] rounded-xl" />
                            <p className="text-lg font-bold">{data[1]["title"]}</p>
                        </div>
                    </div>
                    <div className=" flex flex-wrap justify-around  !space-y-5">
                        <div className="md:w-[540px] md:h-[511px]] flex flex-col justify-center items-center shadow-md rounded-xl space-y-2">
                            <img src={data[2]['image']} alt="" className="w-[444px] h-[420px] rounded-xl" />
                            <p className="text-lg font-bold">{data[2]["title"]}</p>
                        </div>
                        <div className="md:w-[540px] md:h-[511px] flex flex-col justify-center items-center shadow-md rounded-xl space-y-2">
                            <img src={data[3]['image']} alt="" className="w-[444px] h-[420px] rounded-xl" />
                            <p className="text-lg font-bold">{data[3]["title"]}</p>
                        </div>
                    </div>
                    <div className=" flex flex-wrap justify-around space-y-2 md:space-y-5 ">
                        <div className="md:w-[540px] md:h-[511px] flex flex-col justify-center items-center shadow-md rounded-xl space-y-2">
                            <img src={data[4]['image']} alt="" className="w-[444px] h-[420px] rounded-xl" />
                            <p className="text-lg font-bold">{data[4]["title"]}</p>
                        </div>
                        <div className="md:w-[540px] md:h-[511px] flex flex-col justify-center items-center shadow-md rounded-xl space-y-2">
                            <img src={data[4]['image']} alt="" className="w-[444px] h-[420px] rounded-xl" />
                            <p className="text-lg font-bold">{data[4]["title"]}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllProjects
