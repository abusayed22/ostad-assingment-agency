
// data fetching 
export async function getData() {
    const res = await fetch('https://agency.teamrabbil.com/api/TestimonialList')
    if (!res.ok) {
        throw new Error("Data fetching failed!")
    }

    return res.json()
}



async function Testimonial() {
    const data = await getData()

    return (
        <div>
            <div className="w-[90%] mt-5 md:w-[85%] mx-auto">
                <div className="md:w-[98%] mx-auto">
                <p className="text-md text-green font-semibold">TESTIMONIAL LIST</p>
                <p className="text-xl font-bold w-[80%] sm:w-[50%] md:w-[30%]">Better Agency/SEO Solution At Your Fingertips</p>
                </div>
                <br />
                <br />
                <div className="flex flex-wrap justify-around gap-y-5">
                    <div className="w-[392px] h-[440px] flex flex-col justify-center items-center space-y-5 shadow-lg rounded-xl">
                        <img src={data[0]['image']} alt="" className="w-24 h-24 rounded-xl" />
                        <p className="text-sm text-slate-300 text-center w-[90%]">{data[0]["msg"]}</p>
                        <p className="text-lg font-bold">{data[0]["name"]}</p>
                        <p className="text-md font-semibold">{data[0]["designation"]}</p>
                    </div>
                    <div className="w-[392px] h-[440px] flex flex-col justify-center items-center space-y-5 shadow-lg rounded-xl">
                        <img src={data[1]['image']} alt="" className="w-24 h-24 rounded-xl" />
                        <p className="text-sm text-slate-300 text-center w-[90%]">{data[1]["msg"]}</p>
                        <p className="text-lg font-bold">{data[1]["name"]}</p>
                        <p className="text-md font-semibold">{data[1]["designation"]}</p>
                    </div>
                    <div className="w-[392px] h-[440px] flex flex-col justify-center items-center space-y-5 shadow-lg rounded-xl">
                        <img src={data[2]['image']} alt="" className="w-24 h-24 rounded-xl" />
                        <p className="text-sm text-slate-300 text-center w-[90%]">{data[2]["msg"]}</p>
                        <p className="text-lg font-bold">{data[2]["name"]}</p>
                        <p className="text-md font-semibold">{data[2]["designation"]}</p>
                    </div>
                    <div className="w-[392px] h-[440px] flex flex-col justify-center items-center space-y-5 shadow-lg rounded-xl">
                        <img src={data[3]['image']} alt="" className="w-24 h-24 rounded-xl" />
                        <p className="text-sm text-slate-300 text-center w-[90%]">{data[3]["msg"]}</p>
                        <p className="text-lg font-bold">{data[3]["name"]}</p>
                        <p className="text-md font-semibold">{data[3]["designation"]}</p>
                    </div>
                    <div className="w-[392px] h-[440px] flex flex-col justify-center items-center space-y-5 shadow-lg rounded-xl">
                        <img src={data[4]['image']} alt="" className="w-24 h-24 rounded-xl" />
                        <p className="text-sm text-slate-300 text-center w-[90%]">{data[4]["msg"]}</p>
                        <p className="text-lg font-bold">{data[4]["name"]}</p>
                        <p className="text-md font-semibold">{data[4]["designation"]}</p>
                    </div>
                    <div className="w-[392px] h-[440px] flex flex-col justify-center items-center space-y-5 shadow-lg rounded-xl">
                        <img src={data[0]['image']} alt="" className="w-24 h-24 rounded-xl" />
                        <p className="text-sm text-slate-300 text-center w-[90%]">{data[0]["msg"]}</p>
                        <p className="text-lg font-bold">{data[0]["name"]}</p>
                        <p className="text-md font-semibold">{data[0]["designation"]}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial
