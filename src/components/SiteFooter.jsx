// icon 
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";

function SiteFooter() {
  return (
    <div>
      <div>
      {/* Section -1  */}
      <div className='flex flex-col items-center justify-center h-[500px] pt-10 space-y-4'>
        <p className='text-md text-green'>SUBSCRIBE</p>
        <p className='text-2xl md:text-3xl font-bold w-[90%] sm:w-[50%] md:w-[30%] text-center'>Sbuscrib TO Get THe Latest News About Us</p>
        <p className='text-sm text-center text-slate-200'>Please Drop Your Email Below To Get Daily Updates About What We Do</p>
        <form action="" className='!mt-3 sm:w-[350px] md:w-[450px] border-[3px] rounded-xl flex justify-between '>
          <input type="text" placeholder='Enter your Email Address' className='p-1 border-none w-full'/>
          <button className='w-32 h-10 bg-red rounded-xl text-white'>
            Subscribe
          </button>
        </form>
      </div>

      {/* Section -2 */}
      <div className='w-full bg-black p-20'>
        <div className='w-[95%] md:w-[90%] mx-auto md:flex md:justify-around !md:items-center space-y-5'>
          {/* section-1  */}
          <div className="md:w-[30%] space-y-3 md:h-80 ">
            <p className="text-white text-3xl font-bold">WEB LOGO</p>
            <p className="text-white w-[70%]">Some footer text about the Agency. Just alittle Description to help perple understand you better</p>
            <div className="flex space-x-2">
              <div className='hover:bg-white hover:text-green transition delay-100 cursor-pointer w-12 h-12 rounded-full bg-green text-white flex justify-center items-center'>
                <FaFacebookF  />
              </div>
              <div className='hover:bg-white hover:text-green transition delay-100 cursor-pointer w-12 h-12 rounded-full bg-green text-white flex justify-center items-center'>
                <FaTwitter  />
              </div>
              <div className='hover:bg-white hover:text-green transition delay-100 cursor-pointer w-12 h-12 rounded-full bg-green text-white flex justify-center items-center'>
                <FaLinkedinIn  />
              </div>
              <div className='hover:bg-white hover:text-green transition delay-100 cursor-pointer w-12 h-12 rounded-full bg-green text-white flex justify-center items-center'>
                <FiInstagram   />
              </div>
            </div>
          </div>
          {/* section-2  */}
          <div className="md:w-[30%]s space-y-2 md:h-80">
            <p className="text-xl font-semibold text-white">Quick Links</p>
            <p className="text-white"> Services</p>
            <p className="text-white"> Portfolio</p>
            <p className="text-white"> About us</p>
            <p className="text-white"> Contact</p>
          </div>
          {/* section-3 */}
          <div className="md:w-[30%] md:h-80">
          <p className="text-xl font-semibold text-white">Address</p>
          <p className="text-white">Design Agency Head Office.</p>
          <p className="text-white">Airport Road</p>
          <p className="text-white">United Arab Emirate</p>
          </div>
        </div>
        <br />
        <p className="text-white md:ml-32">Copyright Design 2023</p>
      </div>
    </div>
    </div>
  )
}

export default SiteFooter
