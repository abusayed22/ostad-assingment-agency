

// Get Data 
export async function getData() {
    const res = await fetch('https://agency.teamrabbil.com/api/BrandList')

    if (!res.ok) {
        throw new Error('data fetching faild!~')
    }
    return res.json()
}

async function Brand() {
    const data = await getData();

    return (
        <div className="w-full py-10 bg-white">
            <div className="w-[90%] h-full mx-auto flex flex-wrap justify-center md:justify-around items-center space-y-2">
                {
                    data.map((s, i) => (
                        <div key={i} className="w-[200px] ">
                            <img src={s['image']} alt={s['name']} className="w-20 h-15" />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Brand
