

// data fetching
export async function getData() {
    const res = await fetch("https://agency.teamrabbil.com/api/AllService");
    if (!res.ok) {
        throw new Error("Data fetching failed!");
    }

    return res.json();
}

async function Service() {
    const data = await getData();

    return (
        <div>
            <div>
                <div className="w-[90%] mx-auto mt-5">
                    <p className="text-md text-green font-semibold"> Our All Service</p>
                    <p className="text-xl font-bold w-[80%] sm:w-[50%] md:w-[30%]">
                        we Provide BestWeb Design
                    </p>
                    <br />
                </div>

                <div className="w-[90%] mx-auto">

                    <div className="flex flex-wrap justify-around gap-y-5">
                        {
                            data.map((s, i) => (
                                <div key={i} className=" md:h-[600px] md:w-[45%] rounded-xl shadow-xl">
                                    <div className=" w-[90%] h-[90%] flex flex-col space-y-10 p-[5%] py-10">
                                        <div className="space-y-2">
                                            <p className='text-lg font-semibold'>{s['title']}</p>
                                            <p className='text-sm text-slate-200'>{s['des']}</p>
                                        </div>
                                        {/* img sec  */}
                                        <div className="space-y-1">
                                            <div className='flex gap-2  '>
                                                <img src={s['image1']} alt="" className='w-[100%] sm:w-[70%] sm:h-[200px] rounded-lg' />
                                                <img src={s['image2']} alt="" className='w-[100%] sm:w-[30%] sm:h-[200px] rounded-lg' />
                                            </div>
                                            <div className='flex gap-2'>
                                                <img src={s['image3']} alt="" className='w-[100%] sm:w-[40%] sm:h-[200px] rounded-lg' />
                                                <img src={s['image4']} alt="" className='w-[100%] sm:w-[60%] sm:h-[200px] rounded-lg' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Service
