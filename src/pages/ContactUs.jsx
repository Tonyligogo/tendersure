import { FaGlobeAfrica } from "react-icons/fa"
import NavBanner from "../components/NavBanner"
import { IoLocationOutline } from "react-icons/io5"
import { GoClock } from "react-icons/go"
import { FaPhoneVolume } from "react-icons/fa6"
import Map from "../assets/map.png"

function ContactUs() {
  return (
    <div>
        <NavBanner title="Contact Us"/>
        <div className="px-4 lg:px-20 py-5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                <div className="border py-10 px-5">
                    <h2 className="text-customBlue font-bold text-2xl mb-5">Address</h2>
                    <div className="bg-[#f5f5f5] px-5 py-16 grid place-items-center space-y-5">
                    <FaGlobeAfrica className="text-5xl text-customGreen"/>
                    <span className="block text-center text-gray-500">Tendersure Africa SEZ Limited</span>
                    <span className="block text-center text-gray-500">P.O. Box 64960-00620, Nairobi</span>
                    </div>
                </div>
                <div className="border py-10 px-5">
                    <h2 className="text-customBlue font-bold text-2xl mb-5">Location</h2>
                    <div className="bg-[#f5f5f5] h-[312px] px-5 py-16 grid place-items-center space-y-5">
                    <IoLocationOutline className="text-5xl text-customGreen"/>
                    <span className="block text-center text-gray-500">Two Rivers Mall</span>
                    <span className="block text-center text-gray-500">North Tower, 2nd Floor</span>
                    </div>
                </div>
                <div className="border py-10 px-5">
                    <h2 className="text-customBlue font-bold text-2xl mb-5">Contact</h2>
                    <div className="bg-[#f5f5f5] h-[312px] px-5 py-16 grid place-items-center space-y-5">
                    <FaPhoneVolume className="text-5xl text-customGreen"/>
                    <span className="block text-center text-gray-500">Call: +254 709 557 000</span>
                    <span className="block text-center text-gray-500">Email: info@tendersure.africa</span>
                    </div>
                </div>
                <div className="border py-10 px-5">
                    <h2 className="text-customBlue font-bold text-2xl mb-5">Opening Hours</h2>
                    <div className="bg-[#f5f5f5] h-[312px] px-5 py-16 grid place-items-center space-y-5">
                    <GoClock className="text-5xl text-customGreen"/>
                    <span className="block text-center text-gray-500">Mondays to Fridays: 8.00AM to 5.00PM</span>
                    <span className="block text-center text-gray-500">Saturdays: 9:00AM to 1:00PM</span>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-16">
                <img src={Map} alt="" />
                <form className="p-5 shadow-md">
                    <h2 className="text-customBlue font-bold text-2xl">Get in Touch with us</h2>
                    <div className="space-y-4">
                    <div>
                        <label className="text-gray-500 font-semibold">Your name</label>
                        <input type="text" className="w-full p-2 mt-1 border rounded-md focus:outline-none" />
                    </div>
                    <div>
                        <label className="text-gray-500 font-semibold">Your email</label>
                        <input type="email" className="w-full p-2 mt-1 border rounded-md focus:outline-none" />
                    </div>
                    <div>
                        <label className="text-gray-500 font-semibold">Subject</label>
                        <input type="text" className="w-full p-2 mt-1 border rounded-md focus:outline-none" />
                    </div>
                    <div>
                        <label className="text-gray-500 font-semibold">Your message (optional)</label>
                        <textarea className="w-full p-2 mt-1 border rounded-md focus:outline-none" rows="5" />
                    </div>
                    <button className="bg-customBlue text-white py-3 px-6">Submit</button>
                    </div>
                </form>            
            </div>
        </div>
    </div>
  )
}

export default ContactUs