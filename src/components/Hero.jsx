import Brand from "./Brand";

// Get Data 
export async function getData() {
    const res = await fetch('https://agency.teamrabbil.com/api/HeroList')

    if (!res.ok) {
        throw new Error('data fetching faild!~')
    }
    return res.json()
}


async function Hero() {

    const data = await getData();
    

    return (
        <div className='w-[100%] py-5 bg-lemon'>
            <div className='w-[90%] h-[90vh]  mx-auto flex flex-wrap md:justify-center items-center'>
                {/* hero contend  */}
                <div className='md:w-[50%] flex flex-col space-y-4'>
                    <p className='text-2xl font-bold w-[70%] v_lg:w-[90%]'>Increase Your Customers Loyalty and Staisfaction</p>
                    <p className='text-lg w-[90%]'>We help business like yours earn more Customer stadout form competitors,make more money</p>
                    <div className=''>
                        <button className='bg-green rounded-md py-4 px-10 text-slate-50'>Get Start</button>
                    </div>
                </div>

                {/* hero image  */}
                <div className='v_sm:hidden lg:block w-[50%] h-[85vh] space-y-4'>
                    <div className='w-[100%] flex justify-end space-x-4 h-[40%]'>
                        <img
                            src={data['image2']}
                            alt="Picture of the hero"
                            className='md:w-[70%] md:h-[100%] rounded-lg w-[70%]'
                        />
                        <img
                            src={data['image2']}
                            alt="Picture of the hero"
                            className='md:w-[30%] md:h-[100%] rounded-lg'
                        />
                    </div>
                    <div className='w-[100%] flex justify-end space-x-4 h-[40%]'>
                        <img
                            src={data['image2']}
                            alt="Picture of the hero"
                            className='md:w-[40%] md:h-[100%] rounded-lg'
                        />
                        <img
                            src={data['image2']}
                            alt="Picture of the hero"
                            className='md:w-[60%] md:h-[100%] rounded-lg'
                        />
                    </div>
                </div>
            </div>

            <div className="mt-[-10px]">
            <Brand />
            </div>
        </div>
    )
}

export default Hero
