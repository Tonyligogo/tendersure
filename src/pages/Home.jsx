import Hero from "../components/Hero";
import { GiCheckMark } from "react-icons/gi";
import { BsBuildings } from "react-icons/bs";
import { FaBullseye, FaRegEdit, FaSuitcase, FaThumbsUp, FaTrophy } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { MdOutlinePhoneAndroid } from "react-icons/md";

function Home() {
  return (
    <div>
      <Hero />
      {/* brief about */}
      <div className="px-4 pt-8 lg:p-20 space-y-5 lg:space-y-14">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div>
            <span className="text-gray-500 font-bold">
              WELCOME TO TENDERSURE<sup>TM</sup>
            </span>
            <h2 className="text-customBlue text-3xl lg:text-4xl font-bold py-2">
              The Next Generation Of Procurement
            </h2>
          </div>
          <p className="text-gray-500">
            More and more leading organisations are playing the game by the
            rules, meaning there is no way back for the ones who are not yet
            using the system. Tendersure clears the air in the misty haze around
            tenders and the procurement thereof.
          </p>
        </div>
        <div className="grid grid:cols-1 gap-y-5 lg:grid-cols-2">
          <div>
            <h2 className="text-customBlue text-3xl font-bold text-underline pb-6">
              VISION
            </h2>
            <p className="text-gray-500 pt-5">
              Our Vision is to be the preferred solution for eProcurement in
              Africa.
            </p>
          </div>
          <div>
            <h2 className="text-customBlue text-3xl font-bold text-underline pb-5">
              MISSION
            </h2>
            <p className="text-gray-500 pt-5">
              Our Mission is to optimize procurement practices for organizations
              across Africa through automation to enhance efficiency, integrity
              and transparency.
            </p>
          </div>
        </div>
        <div>
          <h2 className="text-customBlue text-3xl font-bold">CORE VALUES</h2>
          <div className="flex flex-col gap-y-10 md:flex-row md:flex-wrap md:justify-between pt-10 pb-15">
            <div>
              <img
                src="https://www.tendersure.africa/wp-content/uploads/2024/03/Image-4-80x80.png"
                alt=""
              />
              <span className="text-customBlue text-xl font-bold pt-3 pb-5 block">
                Efficieny
              </span>
              <ul>
                <li className="list-disc list-inside text-gray-500">
                  Automated bid payment
                </li>
                <li className="list-disc list-inside text-gray-500">
                  Automated bidding
                </li>
                <li className="list-disc list-inside text-gray-500">
                  Unlimited users
                </li>
                <li className="list-disc list-inside text-gray-500">
                  Environmental friendly
                </li>
              </ul>
            </div>
            <div>
              <img
                src="https://www.tendersure.africa/wp-content/uploads/2024/03/Image-6-80x80.png"
                alt=""
              />
              <span className="text-customBlue text-xl font-bold pt-3 pb-5 block">
                Integrity
              </span>
              <ul>
                <li className="list-disc list-inside text-gray-500">
                  Encrypted bidding
                </li>
                <li className="list-disc list-inside text-gray-500">
                  EU commendation
                </li>
                <li className="list-disc list-inside text-gray-500">
                  Level playing field
                </li>
                <li className="list-disc list-inside text-gray-500">
                  Award winning
                </li>
                <li className="list-disc list-inside text-gray-500">
                  Automated evaluation
                </li>
              </ul>
            </div>
            <div>
              <img
                src="https://www.tendersure.africa/wp-content/uploads/2024/03/Image-5-80x80.png"
                alt=""
              />
              <span className="text-customBlue text-xl font-bold pt-3 pb-5 block">
                Transparency
              </span>
              <ul>
                <li className="list-disc list-inside text-gray-500">
                  Secure audit trail
                </li>
                <li className="list-disc list-inside text-gray-500">
                  Traceable
                </li>
                <li className="list-disc list-inside text-gray-500">
                  Buyer portal
                </li>
                <li className="list-disc list-inside text-gray-500">
                  Supplier portal
                </li>
                <li className="list-disc list-inside text-gray-500">
                  Wide geographical reach
                </li>
              </ul>
            </div>
            <div>
              <img
                src="https://www.tendersure.africa/wp-content/uploads/2024/03/Image-3-80x100.png"
                alt=""
                className="size-[80px]"
              />
              <span className="text-customBlue text-xl font-bold pt-3 pb-5 block">
                Innovation
              </span>
              <ul>
                <li className="list-disc list-inside text-gray-500">
                  Procurement spend
                </li>
                <li className="list-disc list-inside text-gray-500">Time</li>
                <li className="list-disc list-inside text-gray-500">
                  Staff costs
                </li>
                <li className="list-disc list-inside text-gray-500">
                  Environment (less paperwork)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-10 lg:mt-0 lg:flex-row items-center lg:gap-10 px-4 lg:px-20">
        <div className="founded-bg !h-[50vh] w-full lg:flex-1">
        <div className="founded-banner !top-[80%] text-xl"> <BsBuildings className="text-3xl lg:text-4xl"/> Founded in 2005</div>
        </div>
        <div className="flex-[1.5] px-4 py-8 lg:px-0 lg:py-0 shadow-md lg:shadow-none">
          <span className="text-gray-500 font-bold">SOLUTION OVERVIEW</span>
          <h2 className="text-customBlue text-3xl lg:text-4xl font-semibold text-underline pb-6">
            What We Offer to Our Customers
          </h2>
          <p className="my-6 text-gray-500">
            TenderSure™ is a cloud based eProcurement solution that enhances
            efficiency, transparency and integrity in the source to procure
            processes in procurement. Tendersure™ is a highly traceable and
            auditable system, which helps to combat corruption in procurement.
          </p>
          <h2 className="text-customBlue font-bold mb-6">Why Choose Tendersure</h2>
          <div className="grid grid-cols-2">
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-gray-500">
                <GiCheckMark className="text-customGreen text-sm" />
                Security
              </li>
              <li className="flex items-center gap-2 text-gray-500">
                <GiCheckMark className="text-customGreen text-sm" />
                Bespoke Evaluation
              </li>
            </ul>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-gray-500">
                <GiCheckMark className="text-customGreen text-sm" />
                Quality Assurance
              </li>
              <li className="flex items-center gap-2 text-gray-500">
                <GiCheckMark className="text-customGreen text-sm" />
                User-friendly
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="stats-bg h-[80vh] md:h-[60vh] lg:h-[40vh]">
        <div className="stats-overlay flex flex-col md:py-5 justify-center lg:flex-row px-4 lg:px-20 items-center gap-6">
            <div className="flex bg-[#eae9ea] w-full h-[120px] md:w-1/2 p-5 px-10 lg:p-10 gap-5">
            <FaSuitcase className="text-5xl text-customGreen"/>
                <div>
                    <span className="block text-4xl text-customBlue font-bold">5000 +</span>
                    <span className="text-gray-500">Tenders</span>
                </div>
            </div>
            <div className="flex bg-[#eae9ea] p-5 w-full h-[120px] md:w-1/2 px-10 lg:p-10 gap-5">
            <FaRegEdit className="text-5xl text-customGreen"/>
                <div>
                    <span className="block text-4xl text-customBlue font-bold">15 +</span>
                    <span className="text-gray-500">Years of Experience</span>
                </div>
            </div>
            <div className="flex bg-[#eae9ea] p-5 w-full h-[120px] md:w-1/2 px-10 lg:p-10 gap-5">
            <FaThumbsUp className="text-5xl text-customGreen"/>
                <div>
                    <span className="block text-4xl text-customBlue font-bold">1000 +</span>
                    <span className="text-gray-500">Happy Clients</span>
                </div>
            </div>
            <div className="flex bg-[#eae9ea] p-5 w-full h-[120px] md:w-1/2 px-10 lg:p-10 gap-5">
            <FaTrophy className="text-5xl text-customGreen"/>
                <div>
                    <span className="block text-4xl text-customBlue font-bold">5 +</span>
                    <span className="text-gray-500">Awards</span>
                </div>
            </div>
            
        </div>
      </div>
      <div className="get-started-bg h-[50vh] lg:h-[35vh]">
        <div className="get-started-overlay flex flex-col gap-4 items-center justify-center text-white text-4xl font-bold">
            <span className="text-center">Get Started On The TenderSure™ Supplier Portal</span>
            <span className="border-2 rounded-full size-[74px] grid place-content-center">
                <FaBullseye/>
            </span>
        </div>
      </div>
      <div className="h-[160vh] lg:h-[110vh] mb-16">
      <div className="contact-us-bg h-[30vh] lg:h-[50vh]">
        <div className="contact-us-overlay flex justify-center py-5">
            <div>
                <h2 className="text-customGreen text-center mb-3">CONTACT DETAILS</h2>
                <span className="contact-underline text-4xl font-bold text-white block pb-7 text-center">How Can We Help You?</span>
            </div>
        </div>
        <div className="lg:bg-white pt-[30vh] lg:pt-0 absolute lg:top-[25vh] z-20 left-0 right-0 mx-4 lg:mx-20 flex flex-col lg:flex-row">
            <div className="contact-form-bg flex-[1.5] border p-4 lg:p-16">
                <span className="text-gray-500 text-sm font-bold block">FREE CONSULTATION</span>
                <h2 className="text-customBlue font-bold text-4xl mt-2 mb-10">Contact Us</h2>
                <form className="space-y-5 md:max-w-[70%] lg:max-w-[300px]">
                    <div className="flex flex-col lg:flex-row gap-5">
                        <input type="text" placeholder="Full Name" 
                        className="p-3 bg-gray-100 w-full"
                        />
                        <input type="email" placeholder="Email Address" 
                        className="p-3 bg-gray-100 w-full"
                        />
                    </div>
                    <div className="flex flex-col lg:flex-row gap-5">
                        <input type="text" placeholder="Phone Number" className="p-3 bg-gray-100 w-full"/>
                        <input type="text" placeholder="Company" className="p-3 bg-gray-100 w-full"/>
                    </div>
                    <select id="select" 
                    className="w-full p-3 bg-gray-100" placeholder="Services">
                        <option value="services">Services</option>
                        <option value="services">Prequalification of Suppliers</option>
                        <option value="services">Request for Quotation (RFQ)</option>
                        <option value="services">Tenders</option>
                    </select>
                    <textarea className="block bg-gray-100 p-2 w-full" placeholder="Your Message"
                    rows={4}
                    ></textarea>
                    <button className="text-white bg-customGreen w-full py-2">SUBMIT</button>
                </form>
            </div>
            <div className="flex-1 flex flex-col contact-banner-bg justify-center px-5 py-5 lg:py-0">
                <div className="bg-customGreen text-white grid place-content-center py-14">
                    <span className="block mx-auto mb-2">
                <MdOutlinePhoneAndroid className="text-center text-3xl"/>
                    </span>
                    <span className="text-center font-bold">Call Us On</span>
                    <span>+254 709 557 000</span>
                </div>
                <div className="bg-white text-customBlue grid place-content-center py-14">
                    <span className="block mx-auto mb-2">
                <TfiEmail className="text-3xl"/>
                    </span>
                    <span className="text-center font-bold">Send Us An Email</span>
                    <a href="mailto:info@tendersure.africa">info@tendersure.africa</a>
                </div>
            </div>
        </div>
      </div>
      </div>
      <div className="px-4 lg:px-20 flex flex-col md:flex-row justify-between items-center">
        <img src="https://www.tendersure.africa/wp-content/uploads/2023/05/45-300x300.png" alt="" className="size-[150px]"/>
        <img src="https://www.tendersure.africa/wp-content/uploads/2023/05/42-300x300.png" alt="" className="size-[150px]"/>
        <img src="https://www.tendersure.africa/wp-content/uploads/2023/05/43-300x300.png" alt="" className="size-[150px]"/>
        <img src="https://www.tendersure.africa/wp-content/uploads/2023/05/44-300x300.png" alt="" className="size-[150px]"/>
        <img src="https://www.tendersure.africa/wp-content/uploads/2023/05/46-300x300.png" alt="" className="size-[150px]"/>
      </div>
    </div>
  );
}

export default Home;
