import { FaPhoneAlt } from "react-icons/fa"
import { GiCheckMark } from "react-icons/gi"
import { IoLocationSharp, IoMailOutline } from "react-icons/io5"
import { TfiAlarmClock } from "react-icons/tfi"

function Footer() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-5 px-4 lg:px-20 my-6 lg:my-16">
        <div>
          <h2 className="text-customBlue font-semibold text-2xl mb-6">Get In Touch</h2>
          <ul className="flex flex-col gap-6">
            <li className="flex gap-2 text-gray-500 items-start leading-tight "><IoLocationSharp className="text-customGreen text-xl" />
            Two Rivers, North Tower, 2nd Floor
            </li>
            <li className="flex gap-2 items-start leading-tight"><IoMailOutline className="text-customGreen text-xl" /> <a href="mailto:info@tendersure.africa">info@tendersure.africa</a> </li>
            <li className="flex gap-2 text-gray-500 items-start leading-tight"><FaPhoneAlt className="text-customGreen text-base" />+254 709 557 000</li>
            <li className="flex gap-2 text-gray-500 items-start leading-tight"><TfiAlarmClock className="text-customGreen text-xl" />
            Mon - Fri: 8:00A.M to 5:00P.M <br />
            Sat: 9:00A.M to 1:00P.M <br />
            (Sundays Closed)
            </li>
          </ul>
        </div>
        <div>
        <h2 className="text-customBlue font-semibold text-2xl mb-6">Sourcing Module Links</h2>
        <ul className="flex flex-col gap-3 lg:gap-6">
          <li className="flex gap-2 items-center"><GiCheckMark className="text-customGreen text-sm" />Supplier Prequalification</li>
          <li className="flex gap-2 items-center"><GiCheckMark className="text-customGreen text-sm" />Request for quotation</li>
          <li className="flex gap-2 items-center"><GiCheckMark className="text-customGreen text-sm" />Tenders</li>
        </ul>
        </div>
        <div>
        <h2 className="text-customBlue font-semibold text-2xl mb-6">Quick Links</h2>
        <ul className="flex flex-col gap-3 lg:gap-6">
          <li className="flex gap-2 items-center"><GiCheckMark className="text-customGreen text-sm" />Home</li>
          <li className="flex gap-2 items-center"><GiCheckMark className="text-customGreen text-sm" />FAQ</li>
          <li className="flex gap-2 items-center"><GiCheckMark className="text-customGreen text-sm" />Privacy Policy</li>
          <li className="flex gap-2 items-center"><GiCheckMark className="text-customGreen text-sm" />Contact Us</li>
          <li className="flex gap-2 items-center"><GiCheckMark className="text-customGreen text-sm" />Terms & Conditions</li>
        </ul>
        </div>
        <div>
        <img src="https://www.tendersure.africa/wp-content/uploads/2024/05/Untitled_design-removebg.png" alt="logo" className="max-h-[70px] lg:mb-12"/>
        <p className="text-gray-500">More and more leading organisations are playing the game by the rules, meaning there is no way back for the ones who are not yet using the system.</p>
        <span className="text-customGreen font-semibold">Find Out More.</span>
        </div>
      </div>
      <div className="bg-customBlue text-white flex flex-col md:flex-row gap-y-3 justify-between px-4 lg:px-20 py-6">
        <p>Copyright &copy; 2023 <span className="text-gray-400">Tendersure Africa SEZ Ltd</span>. All Rights Reserved. </p>
        <ul className="flex gap-2 flex-wrap">
          <li className="flex gap-2">Home <span>|</span></li>
          <li className="flex gap-2">FAQ <span>|</span></li>
          <li className="flex gap-2">Privacy Policy <span>|</span></li>
          <li className="flex gap-2">Contact Us <span>|</span></li>
          <li>Terms & Conditions</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer