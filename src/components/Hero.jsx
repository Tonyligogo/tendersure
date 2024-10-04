import { BsDashLg } from "react-icons/bs";
import { Link } from "react-router-dom";
function Hero() {

  return (
    <div className="hero-bg h-[50vh] lg:h-[80vh]">
        <div className="backdrop-blur-sm hero-bg-overlay h-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 text-white px-4 lg:px-20 h-full place-content-center">
            <div className="space-y-2 md:space-y-8 lg:space-y-10 text-center md:text-left">
                <h2 className="text-[#00ffce] flex items-center justify-center md:justify-start gap-2 text-base md:text-3xl"><BsDashLg className="text-[#00ffce] text-sm md:text-3xl lg:text-5xl"/> A CLOUD BASED</h2>
                <h2 className="font-bold text-base md:text-3xl lg:text-5xl">E-PROCUREMENT SOLUTION</h2>
                <p className="text-sm lg:text-xl">Promoting good governance, transparency and integrity in the procurement process.</p>
                <div className="flex justify-center md:justify-start gap-3 lg:gap-14">
                    <Link to='/available-jobs' className="bg-[#00d68b] py-1 lg:py-3 px-3 lg:px-8 text:xs lg:text-xl font-bold text-customBlue">Available Jobs</Link>
                    <Link to='/contact-us' className="border lg:border-2 py-1 lg:py-3 px-3 lg:px-8 border-white">Contact Us</Link>
                </div>
            </div>
            <div >
                <img className="h-[20vh] w-full md:h-[40vh] lg:h-full object-cover" src="https://images.fastcompany.com/image/upload/f_auto,q_auto,c_fit/wp-cms/uploads/2024/03/7_factors_to_consider_before_implementing_AI_in_your_SaaS_company.jpg" alt="hero-image" />
            </div>
        </div>
        </div>
    </div>
  )
}

export default Hero