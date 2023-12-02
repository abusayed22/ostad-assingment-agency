// icon 
import { FaChevronRight } from "react-icons/fa6"


function SecoundHeader({currentPath}) {
  return (
    <div>
      <div className="w-full h-48 bg-slate-100">
                <br />
                <br />
                <div className="w-[90%] mx-auto">
                    <p className="text-xl font-bold w-[80%] sm:w-[50%] md:w-[30%]">{currentPath}</p>
                    <div className="flex space-x-2 items-center">
                        <p className="text-md">Home </p>
                        <FaChevronRight />
                        <p className="text-md text-green">{currentPath}</p>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default SecoundHeader
