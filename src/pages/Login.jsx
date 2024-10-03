import { FaGlobe, FaSquareWhatsapp } from "react-icons/fa6";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      <div className="px-4 lg:px-20">
        <nav className="py-8 flex flex-col gap-y-5 md:flex-row items-center justify-between">
          <Link to="/">
            <img
              src="https://e.tendersure.africa/img/tendersure-logo.764bf67b.png"
              alt=""
              className="max-h-[50px]"
            />
          </Link>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-[#e9e9ed] py-2 px-2 rounded-lg text-customBlue">
              <FaGlobe className="" />
              <select id="lang" className=" ">
                <option default value="en">
                  English(en)
                </option>
                <option value="en">Portuguese(pt)</option>
                <option value="en">Francais(fr)</option>
                <option value="en">Kiswahili(sw)</option>
                <option value="en">Amharic(am)</option>
              </select>
            </div>
            <span className="border-l-2 pl-2 text-customGreen font-bold text-sm md:text-xl">
              Tutorial videos
            </span>
          </div>
        </nav>
        <div>
          <div className="h-[45vh] relative">
            <img
              src="https://e.tendersure.africa/img/homebg2.25c1a177.png"
              alt=""
              className="h-full w-full object-cover"
            />
            <span className="absolute bottom-10 left-10 text-white font-bold text-2xl">
              The next generation of eSourcing
            </span>
          </div>
          <div className="shadow-lg space-y-8 md:space-y-0 my-4 mb-10 rounded-md py-10 px-4 lg:p-10 flex flex-col md:flex-row">
            <form className="md:border-r-2 pr-4 flex-1">
              <h2 className="text-[#073a82] font-semibold text-xl mb-4">
                Login
              </h2>
              <div className="md:h-[250px] lg:h-[200px]">
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="text-[#073a82] mb-2 block font-semibold"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full py-2 px-3 border rounded-lg focus:outline-none focus:border-blue-200 focus:border-2"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="password"
                    className="text-[#073a82] font-semibold mb-2 block"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="w-full py-2 px-3 border rounded-lg focus:outline-none focus:border-blue-200 focus:border-2"
                  />
                </div>
                <div className="flex items-center gap-3 justify-between">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="rememberMe"
                      name="rememberMe"
                      className="mr-2"
                    />
                    <span className="text-[#073a82]">Remember me</span>
                  </div>
                  <p className="text-customGreen">Forgot Password?</p>
                </div>
              </div>
              <button
                type="button"
                className="bg-customGreen text-white rounded-lg w-full my-4 py-2"
              >
                Sign In
              </button>
              <div className="flex justify-between">
                <span className="text-sm">Don&apos;t have an account</span>
                <span className="text-sm text-customGreen">
                  Contact Tendersure Team
                </span>
              </div>
            </form>
            <div className="md:border-r-2 md:px-4 flex-1">
              <h2 className="text-[#073a82] font-semibold text-xl mb-4">
                Registration
              </h2>
              <p className="md:h-[250px] lg:h-[200px] text-gray-600 tracking-wide">
                If you are not registered, kindly click the &apos;REGISTER
                NOW&apos; button below to register your company. If you have
                already registered, please login with your username and
                password.{" "}
              </p>
              <button
                type="button"
                className="bg-customGreen text-white rounded-lg w-full my-4 py-2"
              >
                Register Now
              </button>
            </div>
            <div className="md:px-4 flex-1">
              <h2 className="text-[#073a82] font-semibold text-xl mb-4">
                Help
              </h2>
              <ul className="md:h-[250px] lg:h-[200px] flex flex-col gap-2">
                <li className="text-gray-600">Phone: +254 709 557 000,</li>
                <li className="text-gray-600">Whatsapp: +254 709 557 000,</li>
                <li className="text-gray-600">
                  Email: help@tendersure.africa,
                </li>
                <li className="text-gray-600">
                  Office Hours: Mon - Fri: 8:00 AM to 5:00 PM
                </li>
              </ul>
              <ul className="flex gap-6 my-6">
                <li>
                  {" "}
                  <FaFacebookF />{" "}
                </li>
                <li>
                  {" "}
                  <FaTwitter />{" "}
                </li>
                <li>
                  <FaInstagram />{" "}
                </li>
                <li>
                  <FaLinkedinIn />
                </li>
                <li>
                  <FaSquareWhatsapp />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-[#073a82] text-white p-8 lg:px-20 py-10">
        <span>
          POWERED BY:TendersureTM System requirements | © 2023. All rignts
          reserved
        </span>
        <p className="mt-8">
          WARNING: Do not proceed if you are not an Authorised User. This
          application is protected by appropriate security measures. Access to
          and use is restricted to Authorised Users only. Any attempt to use
          this system in a manner not authorised or any attempt to alter,
          destroy or damage any Information contained within it may constitute a
          breach of the provisions of the law and shall leave the user liable to
          both criminal and civil proceedings. It is strictly forbidden to
          attempt to access this system using any third party&apos;s logon
          identity. Anyone using this system consents to active monitoring for
          security policy compliance purposes.
        </p>
      </footer>
    </div>
  );
}

export default Login;
