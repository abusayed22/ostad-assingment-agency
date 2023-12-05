// icon
import { MdOutlineSportsSoccer } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";


// data fetching 
export async function getData() {
    const res = await fetch('https://agency.teamrabbil.com/api/WorkList')
    if (!res.ok) {
        throw new Error("Data fetching failed!")
    }

    return res.json()
}

async function Work() {

    const data = await getData();

    return (
        <div>
            <div className="w-[95%] md:w-[90%] mx-auto space-y-2 ">
                <p className="text-md text-green">WORK LIST</p>
                <p className="text-2xl font-bold w-[50%] md:w-[30%]">We prvide th perfect solution <br /> to  your business growth</p>
                <div className="md:flex justify-around md:h-[300px] md:!mt-10">
                    {data.map((s, i) => (
                        <div key={i} className='flex space-x-1 space-y-5  mx-auto'>
                            {/* mobile desgin  */}
                            <div className='md:hidden h-60 mt-10'>
                                <p className='w-10 h-10 flex justify-center items-center bg-lemon text-red rounded-full'>{s['step']}</p>
                                <p className='w-[1px] h-60 bg-red ml-5'></p>
                            </div>
                            <div className=' sm:h-28 md:space-y-4'>
                                <div className="w-16 h-16 text-xl md:w-20 md:h-20 bg-lemon rounded-lg flex justify-center items-center">
                                    {/* <MdOutlineSportsSoccer size={25} /> */}
                                    {s['step']}
                                </div>
                                <p className="text-xl font-semibold">{s['title']}</p>
                                <p className="w-[90%] md:w-[80%]">{s['des']}</p>
                                <div className=" flex w-[50%] space-x-2 cursor-pointer mt-2 md:!mt-7 justify-center items-center">
                                    <button>Learn More</button>
                                    <FaArrowRightLong />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <p className='md:hidden w-full h-[1px] bg-red '></p>
            </div>
        </div>
    )
}

export default Work
